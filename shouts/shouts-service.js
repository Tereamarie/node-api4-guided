module.exports = {
    isValid,
}
function isValid(shout) {
//validate data before sending it to the database//
   
   const result = true;
   // the body should have a message property
   if(!shout.message) {
       return  false;
   }
   //the message property should be a string ""
 if(typeof shout.message !== 'string')
     return  false;

//the message property should have at least 3 characters
 if(shout.message.length < 3)
  return  false;

   return true;
};