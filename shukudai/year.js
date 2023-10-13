let num=Math.floor(Math.random()*100)

switch(true){
  case 7<=num<=12:
    console.log('小学生');
    break;
  case 13<=num<=15:
    console.log('中学生');
    break;
  case 16<=num<=18:
    console.log('高校生');
    break;
    default:
      console.log('その他');
      break;

}