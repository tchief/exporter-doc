// Navbar control
import navbar from "./bundle/navbar";
navbar();

// Luminous(Lightbox) plugin
import LuminousGallery from "./bundle/luminous/LuminousGallery";
const luminousTrigger = document.querySelectorAll('.content-block--image-frame');
const luminousOptions = {
  caption: function (trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  },
}
if( luminousTrigger !== null ) {
  new LuminousGallery(luminousTrigger,{},luminousOptions);
}