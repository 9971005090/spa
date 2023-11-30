"use strict";
export const html = `
                <ul id="side-menu">
                    <li style="text-align: left; margin-left:10px;">
                        <a onclick="etc.move('/info/index');" style="cursor:pointer" controller="patient"> 설명</a>
                    </li>
                    <ul style="padding: 0px;">
                        <li style="padding: 0px;height: 30px;margin-top:-40px; text-align: left; margin-left:30px;"><a onclick="etc.move('/info/index');" style="cursor:pointer; font-size:11pt;" controller="info"> - 소스트리</a></li>
                        <li style="padding: 0 0 75px 0;height: 30px;text-align: left; margin-left:30px;"><a onclick="etc.move('/info/prepare');" style="cursor:pointer; font-size:11pt;" controller="info"> - 준비사항</a></li>
                        <li style="padding: 0 0 75px 0;height: 30px;text-align: left; margin-left:30px;"><a onclick="etc.move('/info/urlProcess');" style="cursor:pointer; font-size:11pt;" controller="info"> - url에 따른 처리단계</a></li>
                    </ul>
                </ul>            
`;