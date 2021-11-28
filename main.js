var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXuvqrAuQ7trTBMyr2IoMQbux-_dN7ZFxnBQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdvVvech1tMLNl-K0FpEz7eT2y32IDgA0kEg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqz2R56iqG4s_lOZxQ0QXmQOkh7ROImhDbSA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy6oePuOge7R3JVZ6dwEaVk-9xwVTPtrJmLw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCRon1UUqjhLTkHHrh0telazOGTesM6sAsw&usqp=CAU","https://thumbs.dreamstime.com/b/photo-cool-grandpa-guy-indicating-fingers-empty-space-salesman-wear-unusual-lumberjack-holiday-suit-red-blazer-tie-outfit-photo-162035357.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ35-b4DCwQoHb43tB46Vy_iKXCMkhzV6XgQ&usqp=CAU"];
var names = ["Fmaily Book", "Gaurav Mahajan", "Suruchi Mahajan", "Gauransh Mahajan", "Vena Gupta","Anil Kumar Gupta","Turun Ghai","Vandana Ghai","Surash Ghai","Mudhu Ghai"];

var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 9
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images [i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names [i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
