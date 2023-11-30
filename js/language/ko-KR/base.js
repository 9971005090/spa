"use strict";
/**
 * @file 모니터링 > 검토 메뉴에서 사용되는 챠트 초기화 정보 정의 파일
 * @version 0.0.1
 * @description 트렌드 챠트 생성에 관련된 초기화 정보/ 유틸 함수 정의 하는 파일
 * @author zaid
 */

/**
 * @constant
 * @typedef {object} CONST
 * @property {object} design 공통으로 처리되는 디자인 정의
 * @property {object} controller 각 메뉴(controller)에 해당 되는 내용 정의
 * @description 모니터링 > 검토 메뉴에서 사용되는 트렌드 챠트 생성과 관련 정보 정의를 한다.
 */
export const CONST = {
    'MESSAGE': {
        'LOGIN-AFTER': `{{name}} 환영합니니다.`,
        'BUTTON': {
            'DELETE': `네. 삭제합니다.`,
            'CANCEL': `취소`,
            'OK': `확인`,
        }
    },
    'CONFIRM': {
        'DELETE': `삭제를 하면 복구가 불가능합니다.<Br />정말 삭제하시겠습니까?`
    },
    'SUCCESS': {
        'DELETE': `정상적으로 삭제됐습니다.`
    },
    'FAIL': {
        'DELETE': `삭제에 실패했습니다. 잠시 후 다시 시도하세요.`
    }
}