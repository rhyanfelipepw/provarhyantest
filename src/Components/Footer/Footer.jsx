
import '../../Style/Footer.css';
import facebook from '../../Img/facebook.png'
import instagram from '../../Img/instagram.png'
import twitter from '../../Img/twitter.png'
import youtube from '../../Img/youtube.png'
function App() {
  return (
    <div class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>Algumas linguagens</h6>
            <p class="text-justify"> <i></i> </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Telefone: 459999484</a></li>
              <li><a href="http://scanfcode.com/category/android/">Email: rhyanfelipepw@hotmail.com</a></li>
              <li><a href="http://scanfcode.com/category/templates/">endereço: privado</a></li>
            </ul>
          </div>

          
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
         <a href="#">Rhyan</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><img src={facebook} width="30px" /><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><img src={instagram} width="35px" /><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><img src={twitter} width="35px" /><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><img src={youtube} width="35px" /><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</div>
  );
}

export default App;
