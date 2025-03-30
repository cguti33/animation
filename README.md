@keyframes sway  {
    0% { transform: rotate(8deg); }
    50% { transform: rotate(-8deg); }
    100% { transform: rotate(8deg); }
}


.object {
  animation: sway 2.4s infinite;
  animation-timing-function: ease-in-out;
  -webkit-transform-origin: top;
  -moz-transform-origin: top;
  transform-origin: top;
}

.object-shape {
  width: 120px;
  height: 54px;
  display: block;
  margin: 0 auto;
  position: relative;
  
}

.object-shape img {
  width: 120px;

}

.object-rope {
  height: 182px;
  width: 1px;
  background-color: #000000;
  content:"";
  display: block;
  margin-left: 50%;
  bottom: 54px;
}

.fade-element {
  width:250px;
  height: 250px;
  opacity: 0;
  display: inline-flex;
  padding: 10px;
  position: absolute;
  top: 33%;
  left: 55%;
  transform: translateY(-50%);
}

.fade-element.visible {
  opacity: 1;
}
