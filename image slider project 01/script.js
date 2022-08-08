
var start = 1;
function set_time(){
  setInterval(image_show,3000);
}
function image_show(){
  var image_data;
  start++;
  if(start==1){
    image_data="https://thumbs.dreamstime.com/z/may-allah-bless-you-your-family-strength-courage-may-allah-bless-you-your-family-strength-courage-217587267.jpg";
  }else if(start==2){
    image_data="https://i.pinimg.com/originals/c5/65/01/c565014a183a42ed770157732963de3e.jpg";
  }else if(start==3){
    image_data="https://en.shafaqna.com/wp-content/uploads/2021/08/Shiagraph-00305-1132x800-1-845x521-2.jpg";
  }else if(start==4){
    image_data="https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=https://media.islamicity.org/wp-content/uploads/2021/08/desert-night-muharram-isp.jpg&w=600&h=337&q=100";
  }else if(start==5){
    image_data="https://us.123rf.com/450wm/marysan9/marysan91702/marysan9170200078/72401108-greeting-card-of-muharram-meaning-is-forbidden-because-it-was-unlawful-to-fight-during-this-month.jpg?ver=6";
  }else{
    image_data="https://thumbs.dreamstime.com/z/may-allah-bless-you-your-family-strength-courage-may-allah-bless-you-your-family-strength-courage-217587267.jpg";
  }

  document.querySelector(".img").src=""+image_data;
  
}
