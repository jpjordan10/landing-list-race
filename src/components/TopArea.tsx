const TopArea = () => (
  <nav className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center p-4">
      <a className="text-2xl font-bold" href="/">
        List<span className="text-red-500">Race</span>
      </a>
      <ul className="hidden md:flex p-5 gap-10">
        <li>
          <a
            href="#home"
            className="text-sm text-slate-400 uppercase transition duration-300text-gray-700 hover:text-red-500"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#works"
            className="text-sm text-slate-400 uppercase transition duration-300text-gray-700 hover:text-red-500"
          >
            How it Works
          </a>
        </li>
        <li>
          <a
            href="#explore"
            className="text-sm text-slate-400 uppercase transition duration-300text-gray-700 hover:text-red-500"
          >
            Explore
          </a>
        </li>
        <li>
          <a
            href="#reviews"
            className="text-sm text-slate-400 uppercase transition duration-300text-gray-700 hover:text-red-500"
          >
            Review
          </a>
        </li>
        <li>
          <a
            href="#blog"
            className="text-sm text-slate-400 uppercase transition duration-300text-gray-700 hover:text-red-500"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-sm text-slate-400 uppercase transition duration-300text-gray-700 hover:text-red-500"
          >
            Contact
          </a>
        </li>
      </ul>
      <button className="md:hidden text-gray-700">You</button>
    </div>
  </nav>
);

export default TopArea;
// <section class="top-area">
//     <div class="header-area">
//       <!-- Start Navigation -->
//       <nav
//         class="navbar navbar-default bootsnav navbar-sticky navbar-scrollspy"
//         data-minus-value-desktop="70"
//         data-minus-value-mobile="55"
//         data-speed="1000"
//       >
//         <div class="container">
//           <!-- Start Header Navigation -->
//           <div class="navbar-header">
//             <button
//               type="button"
//               class="navbar-toggle"
//               data-toggle="collapse"
//               data-target="#navbar-menu"
//             >
//               <i class="fa fa-bars"></i>
//             </button>
//             <a class="navbar-brand" href="index.html"
//               >list<span>race</span></a
//             >
//           </div>
//           <!--/.navbar-header-->
//           <!-- End Header Navigation -->

//           <!-- Collect the nav links, forms, and other content for toggling -->
//           <div
//             class="collapse navbar-collapse menu-ui-design"
//             id="navbar-menu"
//           >
//             <ul
//               class="nav navbar-nav navbar-right"
//               data-in="fadeInDown"
//               data-out="fadeOutUp"
//             >
//               <li class="scroll active"><a href="#home">home</a></li>
//               <li class="scroll"><a href="#works">how it works</a></li>
//               <li class="scroll"><a href="#explore">explore</a></li>
//               <li class="scroll"><a href="#reviews">review</a></li>
//               <li class="scroll"><a href="#blog">blog</a></li>
//               <li class="scroll"><a href="#contact">contact</a></li>
//             </ul>
//             <!--/.nav -->
//           </div>
//           <!-- /.navbar-collapse -->
//         </div>
//         <!--/.container-->
//       </nav>
//       <!--/nav-->
//       <!-- End Navigation -->
//     </div>
//     <!--/.header-area-->
//     <div class="clearfix"></div>
//   </section>
