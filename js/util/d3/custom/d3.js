"use strict";

/**
 * @class
 * d3 사용을 간편하게 하기 위한 class
 * 관련 공부 url
 * https://mynameisdabin.tistory.com/15#post2
 */
class customD3 {
    // 챠트 종류
    type = "line"; // line, bar

    // svg 안의 여백
    margin = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        forScrollLeft: 0
    };

    // svg 크기
    size = {
        width: 100,
        height: 200,
        barWidth: 0 // line 챠트일 경우에는 굳이 값을 설정하지 않아도 된다.
    };

    // svg를 포함하는 div 정보
    divName = {
        parent: "parent", // svg를 생성할 div이름
        chart: "chart", // 생성된 svg id, 향후 해당 svg를 직접 선택할때 사용,
        forScroll: "forScroll",
        forScrollParent: "forScrollParent"
    };

    // x/y축의 기준값 설정(현재 테스트에서는 사용안함)
    axis = {
        x: {
            use: false,
            translate: {
                x: 0, y: 0
            }
        },
        y: {
            use: false,
            translate: {
                x: 0, y: 0
            }
        }
    };

    // x/y축의 스케일 정보
    scale = {
        x: null,
        y: null
    };

    // 챠트에 사용할 데이타
    data = {
        datas: null, // 사용할 데이타
        info: {
            x: null, y: null
        }, // x/y축에 사용할 칼럼명,
        minMax: null, // 강제로 min/max domain 설정 값,
        // duration: 0,
        // checkDuration: 0,
        // isDurationOver: false
    };

    // 생성된 svg객체
    svgObj = {
        org: null,
        forScroll: null
    };

    // x축이 길어져, 스크롤바 생성이 필요할 경우 y축 column 표시 svgObj
    // svgObj.forScroll = null;

    // duration over check
    // isDurationOver = false;

    // x축 공유
    // shareXScale = null;
    
    time = {
        duration: 0,
        checkDuration: 0,
        isDurationOver: false,
        xScaleUnit: 0
    }

    mouseAction = null;
    backgroundGuideLine = {
        isUse: false,
        type: {
            mode: null, // image, line
            imageUrl: null, // url(/assets/images/theme/console/h_10strip_cell_25.png)
            imageSize: null, // `25px 25px`
            lineCreateFunction: null // 배그라운드 라인을 그리는 함수
        }
    }

    drawForUnit = false // 스트립에 단위 표시 여부

    // 클래스 초기화 함수(기본값 세팅)
    constructor(initParameter = null) {
        if(initParameter == null) {
            return;
        }
        if(initParameter.hasOwnProperty("type") === true) {
            this.type = initParameter.type;
        }
        if(initParameter.hasOwnProperty("margin") === true) {
            this.margin = initParameter.margin;
        }
        if(initParameter.hasOwnProperty("size") === true) {
            this.size = initParameter.size;
        }
        if(initParameter.hasOwnProperty("divName") === true) {
            this.divName = initParameter.divName;
        }
        if(initParameter.hasOwnProperty("axis") === true) {
            this.axis = initParameter.axis;
        }
        if(initParameter.hasOwnProperty("data") === true) {
            this.data = initParameter.data;
        }
        if(initParameter.hasOwnProperty("time") === true) {
            this.time = initParameter.time;
        }
        if(initParameter.hasOwnProperty("mouseAction") === true) {
            this.mouseAction = initParameter.mouseAction;
        }
        if(initParameter.hasOwnProperty("mouseAction") === true) {
            this.mouseAction = initParameter.mouseAction;
        }
        if(initParameter.hasOwnProperty("backgroundGuideLine") === true) {
            this.backgroundGuideLine = initParameter.backgroundGuideLine;
        }
        if(initParameter.hasOwnProperty("drawForUnit") === true) {
            this.drawForUnit = initParameter.drawForUnit;
        }
    };

    // svg 생성
    _createChartSvg() {
        if(this.time.duration >= this.time.checkDuration && this.time.duration > 0) {
            this.time.isDurationOver = true;
            let unitWidth = this.time.duration / this.time.checkDuration; // 10시간을 기본 표시
            // let yAxisWidth = 65;
            this.size.width = (unitWidth * this.size.width) + this.margin.right;
            this.size.height = this.size.height - 15;
            $(`#${this.divName.parent}`).css("position", "relative");
            $(`#${this.divName.parent}`).html(`<div class='chartScrollParent ${this.divName.forScrollParent}' style="overflow-x:scroll;overflow-y:hidden;width:calc(100% - ${this.margin.left}px - ${this.margin.right}px);margin-left:${this.margin.left}px;margin-right:${this.margin.right}px;float:right;height:${this.size.height + 15}px"><svg id="${this.divName.chart}" style="width:${this.size.width}px;height:${this.size.height}px"></svg></div>`);

            // $(`#${this.divName.parent}`).append(`<div style="position:absolute;top:0px;left:0px;width:${yAxisWidth}px;height:${this.size.height}px"><svg id="${this.divName.forScroll}" style="width:100%;height:${this.size.height}px"></svg></div>`);
            // $(`#${this.divName.parent}`).css("height", `${this.size.height + 15}px`);

            this.svgObj.org = d3.select(`#${this.divName.chart}`);
            this.svgObj.forScroll = d3.select(`#${this.divName.forScroll}`);
            // this.margin.left = 0;
        }
        else {
            $(`#${this.divName.parent}`).html(`<svg id="${this.divName.chart}" style="width:${this.size.width}px; height:${this.size.height}px;"></svg>`);
            this.svgObj.org = d3.select(`#${this.divName.chart}`);
            this.svgObj.forScroll = this.svgObj.org;
        }
    };

    // 챠트 기본 설정(svg 생성 후, x/y축 scale 설정)
    initChart() {
        this._createChartSvg();
        if(this.data.minMax != null) {
            this._setChartScale("x", this.data.minMax != null ? this.data.minMax['x'] : null);
            this._setChartScale("y", this.data.minMax != null ? this.data.minMax['y'] : null);
        }
    };

    // x/y축 스케일 설정
    _setChartScale(type = "x", minMaxArr = null) {
        // let minMaxArr = d3.extent(this.data.datas.map((item) => {
        //     return item[this.data.info[type]];
        // }));
        if(minMaxArr === null) {
            minMaxArr = customD3.getMinMax(this.data.datas, this.data.info[type]);
        }
        this.scale[type] = d3.scaleLinear();
        this.scale[type].domain([minMaxArr[0], minMaxArr[1]]);
        if(type == "x") {
            this.scale[type].range([this.margin.left, this.size.width - this.margin.right]);
            if(this.margin.hasOwnProperty("scale") === true) {
                this.scale[type].range([this.margin.left + this.margin.scale.left, this.size.width - this.margin.right + this.margin.scale.right]);
            }
            // if(this.time.isDurationOver === true && this.shareXScale === null) {
            //     this.shareXScale = this.scale[type];
            // }
        }
        else if(type == "y") {
            this.scale[type].domain([minMaxArr[0], minMaxArr[1]]);
            // this.scale.y.domain([10.2649, 14.2649]);
            // console.log("type, 0, 1::::", type, minMaxArr[0], minMaxArr[1]);
            // console.log("this.size.height, this.margin.bottom, this.margin.top::::::::::", this.size.height, this.margin.bottom, this.margin.top);
            this.scale[type].range([this.size.height - this.margin.bottom, this.margin.top]);
        }
    };

    // 챠트에 출력할 새로운 데이타를 설정 후 스케일을 다시 설정
    reSetDatas = function(datas, changeType = "x") {
        this.data.datas = datas;
        this._setChartScale(changeType);
    };

    reSetDatasForOnly = function(datas) {
        this.data.datas = datas;
    };

    // 챠트에 출력할 새로운 데이타를 설정 후 스케일을 다시 설정
    reSetMinMax = function(minMax, changeTypes = ["x"]) {
        this.data.minMax = minMax;
        for(let i = 0; i < changeTypes.length; i++) {
            this._setChartScale(changeTypes[i], this.data.minMax[changeTypes[i]]);
        }
    };
    reSetSize = function(width, height) {
        this.size.width = width;
        this.size.height = height;
    };

    // 챠트에 출력할 새로운 종류의 데이타 정보를 세팅
    reSetNewChartInfo = function(info, changeType = "x") {
        this.data = info.data;
        this.margin = info.margin;
        if(this.time.isDurationOver === true) {
            this.margin.left = 0;
        }
        if(this.time.isDurationOver === true) {
            this._setChartScale("y", this.data.minMax["y"]);
        }
        else {
            for(let i = 0; i < ["x", "y"].length; i++) {
                this._setChartScale(["x", "y"][i], this.data.minMax[["x", "y"][i]]);
            }
        }
    };

    getChartDataMin = function(type = "x") {
        return this.data.minMax[type][0];
    }

    getMinMax = function() {
        return this.data.minMax;
    }

    getSvgDatas = function() {
        return this.data.datas;
    }

    getSvgObjSize = function() {
        return this.size;
    }

    getSvgObjDivName = function() {
        return this.divName.chart;
    }

    getSvgMargin = function() {
        return this.margin;
    }

    getSvgSize = function() {
        return this.size;
    }

    getSvgId = function() {
        return this.svgObj.org.attr("id");
    }


    /**
     * svg에 특정 액션을 설정하는 함수
     * @param {object} d3Obj 해당 도형이 그려질 svg 객체
     * @param {string} type 액션(예: mouseout, mouseover, click, mousemove)
     * @param {function} func 액션 함수
     * @returns {void}
     *
     */
    static setOn = function(d3Obj, type, func) {
        d3Obj.on(type, func);
    };

    /**
     * 특정 데이타를 이용하지 않고, 순수하게 일반 도형을 그리는 함수
     * @param {object} d3Obj 해당 도형이 그려질 svg 객체
     * @param {string} type 도형(예 : rect[사각형], path[선] 등등)
     * @param {object} options 도형을 그리기 위한 옵션 값
     * 예)
     * - rect
     *   {x: 0, y: 0, width: 100, height: 100, fill: "none", opacity: 0.1, stroke: "#000000", "stroke-width": 1, class: "test"}
     *   // x: 사각형 시작점의 x값, y: 사각형 시작점의 y값, width: 사각형 가로길이 값, height: 사각형 세로길이 값
     *   // fill: 사각형 내부에 채워지는 값(none: 없음, transparent: 투명, "#00000": 특정 rgb값
     *   // opacity: 채워지는 값의 투명도, stroke: 사각형 외부의 선 색상 rgb값("#000000"), stroke-width: 사각형 외부의 선 두께
     *   // class: 해당 svg에 property 중 class라는 값으로 추가(나중에 해당 도형을 선택할때 사용하거나, 선값은 경우에는 직접 스타일을 지정 가능)
     * - path
     *   {d: "M0,0 L10,10z", fill: "none", opacity: 0.1, stroke: "#000000", "stroke-width": 1, class: "test"}
     *   // d: 선을 그리기 위한 값(https://a11y.gitbook.io/graphics-aria/svg-graphics/svg-paths-shape#moveto 참고)
     *
     * @returns {boolean} true/false 옵션이 있으면 true, 없으면 false
     */
    static drawNormalShape(d3Obj, type = "rect", options = null) {
        if(options === null) {
            return false;
        }
        let shape = d3Obj.append(type);
        for(let key in options) {
            // console.log(key, options[key]);
            shape.attr(key, options[key]);
        }
        return true;
    }

    /**
     * d3 패키지를 이용하여 배열의 min/max 값을 구하는 함수
     * @param {object} obj min/max를 확인하려는 array
     * @param {string} keyName array에서의 비교 key 값
     *
     * @returns {object} min{0}/max{1} 에 들어있는 array
     */
    static getMinMax(obj, keyName) {
        let minMaxArr = d3.extent(obj.map((item) => {
            return item[keyName];
        }));
        return minMaxArr;
    }

    static getDataMinMax(datas, column, useZeroIgnore = false, ignoreValue = null) {
        let minMax = d3.extent(datas.map(function (item) {
            if(useZeroIgnore === true) {
                if(item[column] > 0) {
                    return item[column];
                }
            }
            else if(ignoreValue !== null) {
                if(ignoreValue.indexOf(item[column]) === -1) {
                    return item[column];
                }
            }
            else {
                return item[column];
            }
        }));
        return minMax;
    }


    static drawSimpleLine(svg, drawInfo) {
        let obj = svg.append("path");
        obj.attr("d", drawInfo.d);
        obj.attr("fill", drawInfo.fill); // none, transparent
        obj.attr("stroke-width", drawInfo.stroke_width);
        if(drawInfo.hasOwnProperty("stroke") === true) {
            obj.attr("stroke", drawInfo.stroke);
        }
        if(drawInfo.hasOwnProperty("opacity") === true) {
            obj.attr("opacity", drawInfo.opacity);
        }
        if(drawInfo.hasOwnProperty("stroke_dasharray") === true) {
            obj.attr("stroke-dasharray", drawInfo.stroke_dasharray);
        }
        if(drawInfo.hasOwnProperty("id") === true) {
            obj.attr("id", drawInfo.id);
        }
        if(drawInfo.hasOwnProperty("class") === true) {
            obj.attr("class", drawInfo.class);
        }
        return obj;
    }

    static drawSimpleRect(svg, drawInfo) {
        let obj = svg.append("rect");
        obj.attr("x", drawInfo.x);
        obj.attr("y", drawInfo.y);
        obj.attr("width", drawInfo.width);
        obj.attr("height", drawInfo.height);
        obj.attr("fill", drawInfo.fill); // none, transparent
        obj.attr("opacity", drawInfo.opacity);
    }

    static drawSimpleEllipse(svg, drawInfo) {
        let obj = svg.append("ellipse");
        obj.attr("cx", drawInfo.cx); // 가로
        obj.attr("cy", drawInfo.cy); // 세로(중앙, 원이라 반지름으로 처리가 돼서)
        obj.attr("rx", drawInfo.rx); // 폭반지름
        obj.attr("ry", drawInfo.ry); // 높이반지름
        obj.attr("stroke", drawInfo.stroke);
        obj.attr("stroke-width", drawInfo.stroke_width);
        obj.style("stroke-dasharray", drawInfo.stroke_dasharray)
        obj.attr("fill", drawInfo.fill);
        obj.attr("opacity", drawInfo.opacity);
    }

    static drawSimpleText(svg, text, drawInfo) {
        let obj = svg.append("text");
        obj.attr("font-family", drawInfo.font_family);
        // obj.attr("font-size", drawInfo.font_size);
        // obj.attr("font-weight", drawInfo.font_weight);
        obj.style("font-size", drawInfo.font_size);
        obj.style("font-weight", drawInfo.font_weight);
        obj.attr("x", drawInfo.x);
        obj.attr("y", drawInfo.y);
        if(drawInfo.hasOwnProperty("text_anchor") === true) {
            obj.attr("text-anchor", drawInfo.text_anchor);
        }
        if(drawInfo.hasOwnProperty("fill") === true) {
            obj.attr("fill", drawInfo.fill);
        }
        if(drawInfo.hasOwnProperty("id") === true) {
            obj.attr("id", drawInfo.id);
        }
        if(drawInfo.hasOwnProperty("class") === true) {
            obj.attr("class", drawInfo.class);
        }
        obj.attr("opacity", drawInfo.opacity);
        obj.html(text);
    }

    static drawSimpleTriangle(svg, drawInfo) {
        let x1 = drawInfo.positionX - drawInfo.sideWidth;
        let y1 = drawInfo.positionY;
        let x2 = drawInfo.positionX + drawInfo.sideWidth;
        let y2 = drawInfo.positionY;
        let x3 = drawInfo.positionX;
        let y3 = drawInfo.positionY - (2 * drawInfo.sideWidth);
        let obj = customD3.drawSimpleLine(svg, {
            d: `M${x1},${y1} L${x2},${y2} L${x3},${y3} Z`,
            fill: drawInfo.fill,
            stroke_width: 0,
        });
        return obj;
    }



}

const customChart = {
    lineChart: function (parentDivName, chartDivName, chartHeight = 60, lineColor = "#696969", ecgDatas, baseLine, etc = null) {
        let minMaxDate = customD3.getDataMinMax(ecgDatas, "seconds");
        let minMaxValue = customD3.getDataMinMax(ecgDatas, "dataValue");
        let chartObj = null;
        let minMax = {
            x: [minMaxDate[0], minMaxDate[1]],
            y: [minMaxValue[0], minMaxValue[1]]
        };
        if (etc !== null) {
            if (etc.hasOwnProperty("range") === true) {
                if (etc.range.hasOwnProperty("start") === true && etc.range.hasOwnProperty("end") === true) {
                    minMax.x = [etc.range.start, etc.range.end];
                }
            }
        }
        let sizeWidth = $(`#${parentDivName}`).innerWidth();
        if (etc.hasOwnProperty("chartSizeWidth") === true) {
            sizeWidth = etc.chartSizeWidth;
        }
        let d3Options = {
            type: "line",
            divName: {
                parent: parentDivName,
                chart: chartDivName
            },
            size: {
                width: sizeWidth,
                height: chartHeight
            },
            margin: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            data: {
                datas: ecgDatas,
                info: {
                    x: "seconds",
                    y: "dataValue"
                },
                minMax: minMax
            }
        };

        chartObj = {
            d3: new customD3(d3Options),
            lineGenerator: null,
            path: null
        };
        chartObj.d3.initChart();

        // svg에 생성할 도형 추가
        chartObj.path = chartObj.d3.svgObj.org.append("path");

        // 도형이 line인데, line을 쉽게 구현하는 d3함수 이용(생성된 스케일을 이용함)
        chartObj.linearGenerator = d3.line();
        chartObj.linearGenerator.x(d => chartObj.d3.scale.x(d.seconds));
        chartObj.linearGenerator.y(d => chartObj.d3.scale.y(d.dataValue));
        // null 데이타는 공백으로 처리하는 부분
        chartObj.linearGenerator.defined(function (d) {
            return d.dataValue !== null;
        });

        chartObj.path.data(ecgDatas);
        chartObj.path.attr("d", chartObj.linearGenerator(ecgDatas));
        chartObj.path.attr("fill", "none");
        chartObj.path.attr("stroke-width", 1);
        chartObj.path.attr("stroke", lineColor);

        let center = Math.round((minMax.x[0] + minMax.x[1]) / 2 * 100) / 100;
        let margin = chartObj.d3.getSvgMargin();
        let size = chartObj.d3.getSvgSize();
        if (etc.hasOwnProperty("checkMiddle") === true) {
            if (etc.checkMiddle !== null) {
                let centerX = chartObj.d3.scale.x(center);
                if (etc.checkMiddle.type == "line") {
                    customD3.drawSimpleLine(chartObj.d3.svgObj.org, {
                        d: 'M' + centerX + ' ' + margin.top + ' L ' + centerX + ' ' + (size.height - margin.bottom),
                        fill: "none",
                        stroke_width: 2,
                        stroke: etc.checkMiddle.stroke,
                        opacity: 1
                    })
                }
                else if (etc.checkMiddle.type == "ellipse") {
                    customD3.drawSimpleEllipse(chartObj.d3.svgObj.org, {
                        cx: centerX,
                        cy: (size.height - margin.bottom) / 2,
                        rx: 15,
                        ry: 25,
                        fill: "none",
                        stroke_width: 2,
                        stroke_dasharray: ("3, 3"),
                        stroke: etc.checkMiddle.stroke,
                        opacity: 1
                    });
                }
            }
        }
        if (etc.hasOwnProperty("background") === true) {
            if (etc.background.hasOwnProperty("image") === true) {
                chartObj.d3.svgObj.org.style('background-image', etc.background.image)
                chartObj.d3.svgObj.org.style('background-size', etc.background.size);
            }
        }
    },

    // 아래 영역에 추가적으로 필요한 함수 추가 작성
    // barChart 등 필요한 차트가 있다면 직접 구현해서 사용
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    // types에 배열로 라인 챠트 관련 정보를 넣고, for로 그래프를 그린다.(현재는 2개만 고려한다.) . 이후 더많이 필요할 경우는 그때 수정한다.
    // y축의 정보를 2개 표시해야 하기 때문에 좌측 여백을 크게 잡는다.
    // 챠트 크기, 여백 정보는 0번째 정보에만 넣는다.
    multiTypeLineChart: function (divName, types, etc = null) {
        if (typeof types != "object") {
            return;
        }
        let minMaxDate = null;
        let minMaxvalue = null;
        let minMax = null;
        let sizeWidth = null;
        let d3Options = null;
        let data = null;
        let chartObj = null;

        for (let i = 0; i < types.length; i++) {
            minMaxDate = customD3.getDataMinMax(types[i].datas, types[i].column.x);
            minMaxvalue = customD3.getDataMinMax(types[i].datas, types[i].column.y);
            if (i == 0) {
                minMaxvalue = customD3.getDataMinMax(types[i].datas, types[i].column.y, true);
            }
            minMax = {
                // x: [minMaxDate[0], minMaxDate[1] + 1000],
                x: [0, types[i].time.duration],
                y: [types[i].value.min, types[i].value.max]
            };
            if (i == 0) {
                sizeWidth = $(`#${divName.parent}`).innerWidth();
                d3Options = {
                    type: "line",
                    divName: {
                        parent: divName.parent,
                        chart: divName.chart,
                        forScroll: divName.forScroll,
                        forScrollParent: divName.forScrollParent,
                    },
                    size: {
                        width: sizeWidth,
                        height: types[i].size.height
                    },
                    margin: types[i].margin,
                    data: {
                        datas: types[i].datas,
                        info: {
                            x: types[i].column.x,
                            y: types[i].column.y
                        },
                        minMax: minMax //,
                        // duration: types[i].duration,
                        // checkDuration: types[i].checkDuration
                    },
                    time: types[i].time
                };
                chartObj = {
                    d3: new customD3(d3Options),
                    lineGenerator: null,
                    path: null
                };
                chartObj.d3.initChart();
            } else {
                data = {
                    datas: types[i].datas,
                    info: {
                        x: types[i].column.x,
                        y: types[i].column.y
                    },
                    minMax: minMax,
                    time: types[i].time
                }
                chartObj.d3.reSetNewChartInfo({data: data, margin: types[i].margin});
            }

            // svg에 생성할 도형 추가
            chartObj.path = chartObj.d3.svgObj.org.append("path");

            // 도형이 line인데, line을 쉽게 구현하는 d3함수 이용(생성된 스케일을 이용함)
            chartObj.linearGenerator = d3.line();
            chartObj.linearGenerator.x(d => chartObj.d3.scale.x(d[types[i].column.x]));
            chartObj.linearGenerator.y(d => chartObj.d3.scale.y(d[types[i].column.y]));

            chartObj.path.data(types[i].datas);
            chartObj.path.attr("d", chartObj.linearGenerator(types[i].datas));
            chartObj.path.attr("fill", "none");
            chartObj.path.attr("stroke-width", 1);
            chartObj.path.attr("stroke", types[i].lineColor);

            // y측 표시 라인 처리
            let size = d3Options.size;
            let margin = d3Options.margin;
            let correctMarginLeft = 0;
            // if(i == 1) {
            //     correctMarginLeft = 60
            // }

            // y축
            if (types[i].guide.hasOwnProperty("y") === true) {
                if (types[i].guide.y.indexOf("area") !== -1) {
                    customD3.drawSimpleLine(chartObj.d3.svgObj.org.forScroll, {
                        d: `M${types[i].margin.left - correctMarginLeft},${types[i].margin.top} L${types[i].margin.left - correctMarginLeft},${types[i].size.height - types[i].margin.bottom}`,
                        fill: "none",
                        stroke_width: 1,
                        stroke: types[i].lineColor,
                        opacity: 1
                    });
                }
            }

            // x축
            customD3.drawSimpleLine(chartObj.d3.svgObj.org, {
                d: `M${types[i].margin.left - correctMarginLeft},${types[i].size.height - types[i].margin.bottom} L${chartObj.d3.size.width - types[i].margin.right - correctMarginLeft},${types[i].size.height - types[i].margin.bottom}`,
                fill: "none",
                stroke_width: 1,
                stroke: types[i].lineColor,
                opacity: 1
            });


            // y축 각 영역의 값에 표시 부분 처리
            let unitHeight = (types[i].size.height - types[i].margin.top - types[i].margin.bottom) / (types[i].axis_title.y.length - 1);
            let unitCorrect = -7;
            let textAnchor = "end";
            let textCorrect = -5;
            // if(i == 1) {
            //     unitCorrect = 7;
            //     textAnchor = "start";
            //     textCorrect = 5;
            // }
            for (let j = 0; j < types[i].axis_title.y.length; j++) {
                if (types[i].guide.hasOwnProperty("y") === true) {
                    if (types[i].guide.y.indexOf("area-point") !== -1) {
                        customD3.drawSimpleLine(chartObj.d3.svgObj.org, {
                            d: `M${types[i].margin.left - correctMarginLeft + unitCorrect},${types[i].margin.top + (unitHeight * j)} L${types[i].margin.left - correctMarginLeft},${types[i].margin.top + (unitHeight * j)}`,
                            fill: "none",
                            stroke_width: 1,
                            stroke: types[i].lineColor,
                            opacity: 1
                        });
                    }
                }

                if (types[i].guide.hasOwnProperty("y") === true) {
                    if (types[i].guide.y.indexOf("guide") !== -1) {
                        if (j < types[i].axis_title.y.length - 1) {
                            customD3.drawSimpleLine(chartObj.d3.svgObj.org, {
                                d: `M${types[i].margin.left - correctMarginLeft},${types[i].margin.top + (unitHeight * j)} L${chartObj.d3.size.width - types[i].margin.right - correctMarginLeft},${types[i].margin.top + (unitHeight * j)}`,
                                fill: "none",
                                stroke_width: 1,
                                stroke: types[i].lineColor,
                                opacity: 1,
                                stroke_dasharray: 4
                            });
                        }
                    }
                }

                customD3.drawSimpleText(chartObj.d3.svgObj.forScroll, types[i].axis_title.y[j], {
                    font_family: "sans-serif",
                    font_size: 12,
                    font_weight: 400,
                    fill: types[i].lineColor,
                    x: types[i].margin.forScrollLeft - correctMarginLeft + unitCorrect + textCorrect,
                    y: types[i].margin.top + (unitHeight * j) + 3,
                    text_anchor: textAnchor
                });
            }

            // y축 가이드 라인 처리
            let xScale = chartObj.d3.scale.x;
            // if(chartObj.d3.data.isDurationOver === true) {
            //     xScale = chartObj.d3.shareXScale;
            // }
            // let yGuideUnit = Math.floor(types[i].time.duration / 7);
            let yGuideCount = Math.floor(types[i].time.duration / (types[i].time.xScaleUnit));
            for (let j = 0; j <= yGuideCount; j++) {
                let checkSecond = 60;
                if (j > 0) {
                    checkSecond = types[i].time.xScaleUnit * j;
                    customD3.drawSimpleLine(chartObj.d3.svgObj.org, {
                        d: `M${xScale(checkSecond)},${chartObj.d3.margin.top - 5} L${xScale(checkSecond)},${chartObj.d3.size.height - chartObj.d3.margin.bottom}`,
                        fill: "none",
                        stroke_width: 1,
                        stroke: types[i].lineColor,
                        opacity: 1,
                        stroke_dasharray: 4
                    });
                }

                // if(j % 2 === 0 || (j === yGuideCount - 1)) {
                if (j % 2 === 0) {
                    let guideDate = Date.addSeconds(types[i].startDateTime, checkSecond).toString("yy.MM.dd HH:mm:ss");
                    customD3.drawSimpleText(chartObj.d3.svgObj.org, guideDate, {
                        font_family: "sans-serif",
                        font_size: 12,
                        font_weight: 400,
                        fill: types[i].lineColor,
                        x: xScale(checkSecond) + 5,
                        y: chartObj.d3.size.height - chartObj.d3.margin.bottom + 20,
                        text_anchor: "start"
                    });
                }
            }

            // legend 출력
            if (types[i].hasOwnProperty("legendName") === true) {
                let correctY = 0;
                // if(i > 0) {
                //     correctY = 20;
                // }
                // customD3.drawSimpleLine(chartObj.d3.svgObj.org, {
                //     d: `M${types[i].margin.left + 20} ${types[i].margin.top + correctY} L ${types[i].margin.left + 50} ${types[i].margin.top + correctY}`,
                //     fill: "none",
                //     stroke_width: 2,
                //     stroke: types[i].lineColor,
                //     opacity: 1
                // });
                for (let key in types[i].legendName.title) {
                    customD3.drawSimpleText(chartObj.d3.svgObj.forScroll, types[i].legendName.title[key], {
                        font_family: "sans-serif",
                        font_size: 12,
                        font_weight: 800,
                        fill: types[i].legendName.color,
                        // x: types[i].margin.left + 50 + 5,
                        x: types[i].margin.forScrollLeft - types[i].legendName.title[key].margin,
                        y: types[i].margin.top + correctY + 3 + (key * 15),
                        text_anchor: "start"
                    });
                }
            }


            if (types[i].mouseAction.hasOwnProperty("tooltip") === true) {
                let tooltip = chartObj.d3.svgObj.org.append("g")
                    .attr("class", "tooltip")
                    .style("opacity", types[i].mouseAction.tooltip.opacity);

                tooltip.append("rect")
                    .attr("width", types[i].mouseAction.tooltip.size.width)
                    .attr("height", types[i].mouseAction.tooltip.size.height)
                    .attr("fill", types[i].mouseAction.tooltip.fill);

                tooltip.append("text")
                    .attr("class", types[i].mouseAction.tooltip.class)
                    .attr("dx", types[i].mouseAction.tooltip.position.dx)
                    .attr("dy", types[i].mouseAction.tooltip.position.dy)
                    .style("text-anchor", "middle");
            }

            // 마우스 드레그 처리가 있을 경우 line을 먼저 만들어줌
            if (types[i].mouseAction.hasOwnProperty("over") === true) {
                let mouseG = chartObj.d3.svgObj.org.append("g")
                    .attr("class", "mouse-over-effects");

                mouseG.append("path")
                    .attr("class", types[i].mouseAction.over.class)
                    .style("stroke", types[i].mouseAction.over.stroke)
                    .style("stroke-width", types[i].mouseAction.over.stroke_width)
                    .style("opacity", types[i].mouseAction.over.opacity);

                let mouseS = chartObj.d3.svgObj.org.append("g")
                    .attr("class", "mouse-click-effects");
                mouseS.append("path") // this is the black vertical line to follow mouse
                    .attr("class", `${types[i].mouseAction.selected.class}`)
                    .style("stroke", types[i].mouseAction.selected.stroke)
                    .style("stroke-width", types[i].mouseAction.selected.stroke_width)
                    .style("opacity", types[i].mouseAction.selected.opacity);
                mouseS.append("path") // this is the black vertical line to follow mouse
                    .attr("class", `${types[i].mouseAction.selected.class}-triangle`)
                    .style("stroke", types[i].mouseAction.selected.stroke)
                    .style("opacity", types[i].mouseAction.selected.opacity)
                    .style("fill", types[i].mouseAction.selected.stroke);
                mouseS.append("text")
                    .attr("class", `${types[i].mouseAction.selected.class}-text`)
                    .attr("font-family", "sans-serif")
                    .attr("font-size", 12)
                    .attr("font-weight", 800)
                    .style("text-anchor", "start")
                    .attr("fill", types[i].mouseAction.selected.stroke);

                let bisectA = d3.bisector(function (item) {
                    return item[types[i].column.x];
                }).left;
                let bisectB = d3.bisector(function (item) {
                    return item[types[i].column.x];
                }).right;
                mouseG.append('svg:rect') // append a rect to catch mouse movements on canvas
                    .attr('x', types[i].margin.left) // can't catch mouse events on a g element
                    .attr('y', types[i].margin.top) // can't catch mouse events on a g element
                    .attr('width', chartObj.d3.size.width - types[i].margin.left - types[i].margin.right) // can't catch mouse events on a g element
                    .attr('height', types[i].size.height - types[i].margin.top - types[i].margin.bottom)
                    .attr('fill', 'none')
                    .attr('pointer-events', 'all')
                    .on('mouseout', function () { // on mouse out hide line, circles and text
                        d3.select(`#${divName.parent} .${types[i].mouseAction.over.class}`)
                            .style("opacity", "0")
                            .style("stroke", types[i].mouseAction.over.stroke);
                        if (types[i].mouseAction.hasOwnProperty("tooltip") === true) {
                            d3.selectAll("#" + divName.parent + " .tooltip")
                                .style("opacity", "0");
                        }
                    })
                    .on('mouseover', function () { // on mouse in show line, circles and text
                        d3.select(`#${divName.parent} .${types[i].mouseAction.over.class}`)
                            .style("opacity", "1")
                            .style("stroke", types[i].mouseAction.over.stroke);
                        if (types[i].mouseAction.hasOwnProperty("tooltip") === true) {
                            d3.selectAll("#" + divName.parent + " .tooltip")
                                .style("opacity", "1");
                        }
                    })
                    .on('click', function () {
                        let mouse = d3.mouse(this);
                        let selected_v = parseInt(xScale.invert(mouse[0]));
                        let selected_v_idx = bisectA(types[i].datas, selected_v);
                        let selected_date = Date.addSeconds(types[i].startDateTime, selected_v);
                        if (types[i].mouseAction.hasOwnProperty("selected") === true) {
                            let foundItem = types[i].datas.find(function (item) {
                                return item[types[i].column.x] === selected_v;
                            });
                            if (foundItem === null || foundItem === undefined) {
                                foundItem = types[i].datas[selected_v_idx];
                                selected_date = foundItem.dateTime
                            }

                            d3.select(`#${divName.parent} .${types[i].mouseAction.selected.class}`)
                                .attr("d", function () {
                                    let d = "M" + xScale(foundItem.seconds) + "," + eval(types[i].size.height - types[i].margin.bottom);
                                    d += " " + xScale(foundItem.seconds) + "," + types[i].margin.top;
                                    return d;
                                })
                                .style("opacity", "1")
                                .style("stroke", types[i].mouseAction.over.stroke);

                            d3.select(`#${divName.parent} .${types[i].mouseAction.selected.class}-triangle`)
                                .attr("d", function () {
                                    let x1 = xScale(foundItem.seconds) - 5;
                                    let y1 = types[i].margin.top - 13;
                                    let x2 = xScale(foundItem.seconds) + 5;
                                    let y2 = types[i].margin.top - 13;
                                    let x3 = xScale(foundItem.seconds);
                                    let y3 = (types[i].margin.top - 13) + (2 * 5);
                                    return `M${x1},${y1} L${x2},${y2} L${x3},${y3} Z`;
                                })
                                .style("opacity", "1");

                            if (selected_v_idx < 4) {
                                d3.select(`#${divName.parent} .${types[i].mouseAction.selected.class}-text`)
                                    .html(`${selected_date.toString('yy.MM.dd HH:mm:ss')}`)
                                    .attr("transform", "translate(" + eval(xScale(foundItem.seconds) - 0) + "," + (types[i].margin.top - 15) + ")");
                            } else if (types[i].datas.length - 4 < selected_v_idx) {
                                d3.select(`#${divName.parent} .${types[i].mouseAction.selected.class}-text`)
                                    .html(`${selected_date.toString('yy.MM.dd HH:mm:ss')}`)
                                    .attr("transform", "translate(" + eval(xScale(foundItem.seconds) - 125) + "," + (types[i].margin.top - 15) + ")");
                            } else {
                                d3.select(`#${divName.parent} .${types[i].mouseAction.selected.class}-text`)
                                    .html(`${selected_date.toString('yy.MM.dd HH:mm:ss')}`)
                                    .attr("transform", "translate(" + eval(xScale(foundItem.seconds) - 70) + "," + (types[i].margin.top - 15) + ")");
                            }

                            types[i].mouseAction.selected.callback(types[i].name, foundItem);
                        }
                    })
                    .on('mousemove', function () { // mouse moving over canvas
                        let mouse = d3.mouse(this);
                        let selected_v = parseInt(xScale.invert(mouse[0]));
                        let selected_v_idx = bisectA(types[i].datas, selected_v);
                        if (types[i].mouseAction.hasOwnProperty("over") === true) {
                            d3.select(`#${divName.parent} .${types[i].mouseAction.over.class}`)
                                .attr("d", function () {
                                    let d = "M" + mouse[0] + "," + eval(types[i].size.height - types[i].margin.bottom);
                                    d += " " + mouse[0] + "," + types[i].margin.top;
                                    return d;
                                });
                        }
                        if (types[i].mouseAction.hasOwnProperty("tooltip") === true) {
                            let foundItem = types[i].datas.find(function (item) {
                                return item[types[i].column.x] === selected_v;
                            });

                            if (foundItem === null || foundItem === undefined) {
                                foundItem = types[i].datas[selected_v_idx];
                            }

                            if (foundItem) {
                                d3.select(`#${divName.parent} .${types[i].mouseAction.over.class}`)
                                    .attr("d", function () {
                                        // let d = "M" + mouse[0] + "," + eval(types[i].size.height - types[i].margin.bottom);
                                        // d += " " + mouse[0] + "," + types[i].margin.top;
                                        let d = `M${xScale(foundItem.seconds)},${(types[i].size.height - types[i].margin.bottom)} ${xScale(foundItem.seconds)},${types[i].margin.top}`;
                                        return d;
                                    });

                                let date = foundItem.dateTime;

                                if (selected_v_idx < 4) {
                                    d3.selectAll("#" + divName.parent + " .tooltip")
                                        .attr("transform", "translate(" + eval(xScale(foundItem.seconds) - 0) + "," + eval(mouse[1] - 50) + ")");
                                } else if (types[i].datas.length - 4 < selected_v_idx) {
                                    d3.selectAll("#" + divName.parent + " .tooltip")
                                        .attr("transform", "translate(" + eval(xScale(foundItem.seconds) - 150) + "," + eval(mouse[1] - 50) + ")");
                                } else {
                                    d3.selectAll("#" + divName.parent + " .tooltip")
                                        .attr("transform", "translate(" + eval(xScale(foundItem.seconds) - 75) + "," + eval(mouse[1] - 50) + ")");
                                }

                                d3.selectAll("#" + divName.parent + " .tooltip_text").html(`${date}`);
                                d3.selectAll("#" + divName.parent + " .tooltip")
                                    .style("opacity", "1");
                            } else {
                                d3.selectAll("#" + divName.parent + " .tooltip")
                                    .style("opacity", "0");
                            }
                        }
                    });
            }

            // 데이타에 bubble 표시
            if (types[i].hasOwnProperty("effect") === true) {
                if (types[i].effect.hasOwnProperty("dataForBubble") === true) {
                    let mouseBubble = chartObj.d3.svgObj.org.append("g")
                    mouseBubble.selectAll('circle')
                        .data(types[i].datas)
                        .enter()
                        .append('circle')
                        .attr('class', 'bubble')
                        .attr('cx', (d) => {
                            return xScale(d.seconds)
                        })
                        .attr('cy', (d) => {
                            return chartObj.d3.scale.y(d.value)
                        })
                        .attr("fill", types[i].effect.dataForBubble.fill)
                        .attr('r', types[i].effect.dataForBubble.r);
                }
            }
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
}