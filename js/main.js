var init = false;

var slider = [
  {
    title: 'slide 1',
    text: 'this is slide one',
    img: 'images/slide1.png'
  },
  {
    title: 'slide 2',
    text: 'this is slide two',
    img: 'images/slide2.png'
  },
  {
    title: 'slide 3',
    text: 'this is slide three',
    img: 'images/slide3.png'
  },
  {
    title: 'slide 4',
    text: 'this is slide four',
    img: 'images/slide4.png'
  },
  {
    title: 'slide 5',
    text: 'this is slide five',
    img: 'images/slide5.png'
  }
];

var slideIdx = 0;

function loadSlider(){
  $('.carousel-title').html(slider[slideIdx].title);
  $('.carousel-text').html(slider[slideIdx].text);

  if(init === false){
    for(var i = 0; i < slider.length; i++){
      $('.slides').append('<span data-slide="' + i + '" class="slide-idx fa fa-circle"></span>');
    }
    init = true;
  }
}

function nextSlide(){
  if((slideIdx + 1) != slider.length){
    slideIdx++;
  }
  else {
    slideIdx = 0;
  }
  loadSlider();
}

function prevSlide(){
  if(slideIdx != 0){
    slideIdx--;
  }
  else {
    slideIdx = slider.length-1;
  }
  loadSlider();
}

$(function(){
  $('.slide-idx').on('click',function(){
    console.log("click");
    slideIdx = $(this).data('slide');
    loadSlider();
  })
})
