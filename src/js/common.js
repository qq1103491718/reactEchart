// 导入天气图标
let ZZ1 = require('../img/marker/ZZ/primary.png')
let ZZ2 = require('../img/marker/ZZ/warning.png')
let ZZ3 = require('../img/marker/ZZ/turn.png')
let ZZ4 = require('../img/marker/ZZ/danger.png')
// 计算天气图标
// 闯入type团标样式  返回图标img二进制
export const mixinWeatch = function (type) {
  switch (type) {
    case 1:
      return ZZ1;
    case 2:
      return ZZ2;
    case 3:
      return ZZ3;
    case 4:
      return ZZ4;
    default:
      return ZZ4;
  }
}
