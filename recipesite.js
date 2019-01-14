function OnButtonClick() {
  var word = prompt("甘いものが食べたかったら１、お腹に溜まるものが食べたかったら２、簡単にできるものが食べたかったら３、ダイエット中の人は４と入力してください");
  switch (word) {
    case "１":
    case "1":
      alert("チョコグラノーラバイトがおすすめ！");
      break;

    case "２":
    case "2":
      alert("キムチチャーハンがオおすすめ！");
      break;

    case "３":
    case "3":
      alert("しらす丼がおすすめ！");
      break;

    case "４":
    case "4":
      alert("オートミールバナナクッキーがおすすめ！まあ何も食べないのが一番痩せますが...");
      break;

    default:
      alert("とりあえず１〜４の中で一番好きな数字を入力してください。");
  }
}
