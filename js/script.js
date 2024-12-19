function calculerScore(event) {
    event.preventDefault(); 

    const correctAnswers = {
        question1: 'Glutes',
        question2: '2.2',
        question3: 'Strength Training',
        question4: 'Proteins',
        question5: 'Creatine',
        question6: 'Hypertrophy',
        question7: 'Pull-ups',
        question8: 'Chicken',
        question9: '2 L',
        question10: '60-90 seconds'
    };

    let score = 0;

    for (let question in correctAnswers) {
        const radioButtons = document.getElementsByName(question);
        let answer = null;

        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                answer = radioButtons[i].value;
                break;
            }
        }

        if (answer === correctAnswers[question]) {
            score++;
        }
    }

    alert(`Score : ${score}/10`);
}


// Contact
function envoyerMail(event) {
    
    event.preventDefault();

    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    
    
    let mail = [];
    mail.push(`Nom : ${name}`);
    mail.push(`Email : ${email}`);
    mail.push(`Sujet : ${subject}`);
    mail.push(`Message : ${message}`);

    // Convertir le tableau en chaîne
    let affichage = mail.join("\n\n");

    
    let Confirmation =window.confirm(`Confirmez-vous l'envoi du message suivant ?\n\n${affichage}`);

    if(Confirmation){
        alert("Votre message a été envoyé avec succès !");
    } else {
        alert("L'envoi a été annulé.");
    }
}