"use strict";

/**
 * @class
 * d3 사용을 간편하게 하기 위한 class
 * 관련 공부 url
 * https://mynameisdabin.tistory.com/15#post2
 */
class customChartjs {
    // 챠트 종류
    type = "line"; // line, bar
    canvas = null;
    ctx = null;
    divName = null;
    object = null;
    lineColors = ["red", "blue", "brown", "green"]; // 일단 4개
    globalOptions = {
        fontSize: 10,
        fontColor: "black"
    }
    beginAtZero = false;
    data = null;
    baseDataOptions = {
        fill: false, // line 챠트 안쪽의 색 채우기
        lineTension: 0.1, // 데이타 사이 연결 곡선 처리리시 굴곡(낮은 수가 거의 굴곡 없음)
        backgroundColor: "white", // 챠트 채움 색 또는 레전드 채움
        // borderCapStyle: 'butt',
        // borderDash: [], // try [5, 15] for instance
        // borderDashOffset: 0.0,
        // borderJoinStyle: 'miter',
        pointBorderColor: "black",
        pointBackgroundColor: "white",
        pointBorderWidth: 1,
        pointHoverRadius: 8,
        // pointHoverBackgroundColor: "yellow",
        // pointHoverBorderColor: "yellow",
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        // notice the gap in the data and the spanGaps: true
        spanGaps: true //labels 에 대응되는 값이 없을 경우 끊어짐(false), 안끊어짐(true)
    }
    options = {
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }

    constructor(initParameter = null) {
        if(initParameter == null) {
            return;
        }
        if(initParameter.hasOwnProperty("type") === true) {
            this.type = initParameter.type;
        }
        if(initParameter.hasOwnProperty("divName") === true) {
            let width, height;
            this.divName = initParameter.divName;
            this._setSize();
            this.canvas = document.getElementById(this.divName);
            // this.canvas.setAttribute("style",`width:${width}px; height:${height}px`);
            // console.log("this.canvas.height::::", this.canvas.clientHeight);
            // console.log("this.canvas.width::::", this.canvas.clientWidth);
            this.ctx = this.canvas.getContext('2d');
        }
        if(initParameter.hasOwnProperty("beginAtZero") === true) {
            this.options.scales.yAxes[0].ticks.beginAtZero = initParameter.beginAtZero;
        }
        if(initParameter.hasOwnProperty("data") === true) {
            this.data = initParameter.data;
        }
    };

    draw = function() {
        Chart.defaults.global.defaultFontColor = this.globalOptions.fontColor;
        Chart.defaults.global.defaultFontSize = this.globalOptions.fontSize;
        let labels = null;
        let dataSets = null;
        [labels, dataSets] = this._getParsingData();
        this.object = new Chart(this.ctx, {
            type: this.type,
            data: {
                labels: labels,
                datasets: dataSets
            },
            options: this.options
        });
    }

    _getParsingData = function() {
        // labels 만들기
        let labels = new Array();
        let tempDataSets = new Object();
        let dataSets = new Array();
        for(let j = 0; j < this.data.info.yColumn.length; j++) {
            tempDataSets[this.data.info.yColumn[j]['name']] = {
                label: this.data.info.yColumn[j]['title'],
                data: new Array()
            }
        }
        for(let i = 0; i < this.data.object.length; i++) {
            labels.push(this.data.object[i][this.data.info.xColumn.name]);
            for(let j = 0; j < this.data.info.yColumn.length; j++) {
                tempDataSets[this.data.info.yColumn[j]['name']]['data'].push(this.data.object[i][this.data.info.yColumn[j]['name']]);
            }
        }
        for(let j = 0; j < this.data.info.yColumn.length; j++) {
            this.baseDataOptions['borderColor'] = this.lineColors[j];
            tempDataSets[this.data.info.yColumn[j]['name']] = Object.assign({}, this.baseDataOptions, tempDataSets[this.data.info.yColumn[j]['name']]);
        }

        for(const key in tempDataSets) {
            dataSets.push(tempDataSets[key]);
        }
        return [labels, dataSets];
    }

    _setSize = function() {
        let width = $(`#${this.divName}`).parent(`div`).width();
        let height = $(`#${this.divName}`).parent(`div`).height();
        $(`#${this.divName}`).attr("width", `${width}vw`);
        $(`#${this.divName}`).attr("height", `${height}vw`);
    }
}