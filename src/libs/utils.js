/* 格式化时间戳 */

export default function formDataTime(timeStamp) {
  const date = new Date(timeStamp);
// padStart Example
/*   const str1 = "5";
  console.log(str1.padStart(2, "0")); */

  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2,'0');
  const d = `${date.getDate()}`.padStart(2,'0');
  // 补0函数 方法
  // const h = addZero(date.getHours());
  // const i = addZero(date.getMinutes());
  // const s = addZero(date.getSeconds());

  const h = `${date.getHours()}`.padStart(2, "0");
  const i = `${date.getMinutes()}`.padStart(2, "0");
  const s = `${date.getSeconds()}`.padStart(2, "0");

  console.log(y);

  return `${y}年${m}月${d}日 ${h}:${i}:${s} `;

}

/* // 补0函数 
function addZero(value) {
  return value < 10 ? "0" + value : value;
}
 */