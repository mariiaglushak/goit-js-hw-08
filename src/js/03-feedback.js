import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form')

console.dir(feedbackForm)
let feedbackFormWarm = {};

const feedbackFormParse = () => {
    
    try {
        feedbackFormWarm = JSON.parse(localStorage.getItem("feedback-form-state"))
    } catch (err) {
        console.log(err);
    }
    if (feedbackFormWarm === null) {

    } else {
        feedbackForm["email"].value = feedbackFormWarm.email
        feedbackForm["message"].value = feedbackFormWarm.message 
    }
    console.log(feedbackFormWarm)
  

};
feedbackFormParse();

feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(localStorage.getItem("feedback-form-state"))
   
    localStorage.removeItem("feedback-form-state")

   feedbackForm.reset()
});



const feedbackFormObj = {}
Object.assign(feedbackFormObj, feedbackFormWarm)

const feedbackFormInput = event => {
  console.log(feedbackFormObj)
    const feedbackFormName = event.target.name
    const feedbackFormValue = event.target.value
    feedbackFormObj[feedbackFormName] = feedbackFormValue
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormObj))

  
};

feedbackForm.addEventListener('input', throttle(feedbackFormInput,500))


