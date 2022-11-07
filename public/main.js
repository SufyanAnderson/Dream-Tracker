var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbUp = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash-o");
var heart = document.getElementsByClassName("fa-heart");

// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

Array.from(heart).forEach(function(element){
  element.addEventListener('click', function(){
    const hours = this.parentNode.parentNode.childNodes[1].innerText
    const day  = this.parentNode.parentNode.childNodes[3].innerText
    const dream = this.parentNode.parentNode.childNodes[5].innerText
    const favorited = this.parentNode.parentNode.classList.contains('activeListItem')
    fetch('favorite' , {
      method: 'put',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        'hours': hours,
        'day': day,
        'dream':dream,
        'favorited': !favorited
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  })
}) 

// Array.from(thumbDown).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//     fetch('messages', {
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//         'thumbDown':thumbDown
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const hours = this.parentNode.parentNode.childNodes[1].innerText
        const day  = this.parentNode.parentNode.childNodes[3].innerText
        const dream = this.parentNode.parentNode.childNodes[5].innerText

        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'hours': hours,
            'day': day,
            'dream': dream
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
