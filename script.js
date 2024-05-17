$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky')
    } else {
      $('.navbar').removeClass('sticky')
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show')
    } else {
      $('.scroll-up-btn').removeClass('show')
    }
  })

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 })
    // removing smooth scroll on slide-up button click
    $('html').css('scrollBehavior', 'auto')
  })

  $('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css('scrollBehavior', 'smooth')
  })

  // toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active')
    $('.menu-btn i').toggleClass('active')
  })

  // typing text animation script
  var typed = new Typed('.typing', {
    strings: [
      'Software Developer',
      'Fron-End Developer ',
      'UI,UX Designer',
      'Freelancer'
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })

  var typed = new Typed('.typing-2', {
    strings: [
      'Front End Mobile Developer',
      'UI UX Designer',
      'Freelancer',
      'React Native Developer'
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })

  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  })

  // Function to send email
  function sendEmail (name, email, subject, message) {
    function resetForm () {
      $('.field.name input').val('')
      $('.field.email input').val('')
      $('.field input[type="text"]').val('')
      $('.field.textarea textarea').val('')
    }

    var recipientEmail = 'hairf7663@gmail.com' // Your email address
    var emailSubject = 'New Message from ' + name + ': ' + subject
    var emailBody =
      'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message

    // AJAX request to send email
    $.ajax({
      type: 'POST',
      url: 'https://formspree.io/f/mjvnzoev', // Formspree endpoint
      data: {
        name: name,
        _replyto: email,
        subject: emailSubject,
        message: emailBody
      },
      dataType: 'json',
      success: function () {
        alert('Message sent successfully!')
        resetForm()
      },
      error: function () {
        alert('Error sending message.')
      }
    })
  }

  // When send message button is clicked
  $('.button-area button[type="submit"]').click(function (event) {
    event.preventDefault() // Prevent form submission

    // Get form data
    var name = $('.field.name input').val()
    var email = $('.field.email input').val()
    var subject = $('.field input[type="text"]').val()
    var message = $('.field.textarea textarea').val()
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      subject.trim() === '' ||
      message.trim() === ''
    ) {
      alert('Please fill in all fields.')
      return
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.')
      return
    }
    // Call function to send email
    sendEmail(name, email, subject, message)
  })
})
