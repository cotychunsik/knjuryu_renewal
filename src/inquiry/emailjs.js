   const sendEmail = () => {
        emailjs.init('cotychunsik');
        let templateParams  = {
            name : document.getElementById('name').value,
            phone : document.getElementById('phone').value,
            email : document.getElementById('email').value,
            message : document.getElementById('message').value,
        }
        console.log(templateParams);
        emailjs.send('service_fy3awyk', 'info_knjuryu', templateParams).then(function(response){
            console.log('Success!', response.status, response.text);
            setStatus('success');
        }, function(error){
            console.log('Failed...', error);
            setStatus('fail');
        })
    }