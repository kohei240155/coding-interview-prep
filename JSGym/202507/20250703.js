/*
================================================================================
問題: 🧑‍💻 クラスルームの人数をカウントせよ！
出典: https://jsgym.shiftb.dev/q/ugsztQbSZt
================================================================================
*/

// ✅ 自分の解答
// 引数としてクラスルームの出席情報を受け取ります。
const students = [true, false, true, true, false];

// ここに処理の全てを実装してください。結果をconsole.logで出力してください。
const countAttendees = (students) => students.reduce((acc, item) => item == true ? acc + 1 : acc + 0, 0);

console.log(countAttendees(students));

// 📘 模範解答
// const students = [true, false, true, true, false];
// const countPresent = (attendanceArray) => attendanceArray.filter(Boolean).length;
// console.log(countPresent(students)); // 3

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- filter(Boolean)と書くことでTrueだけフィルターすることができる
--------------------------------------------------------------------------------
*/
