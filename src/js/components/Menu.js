import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
	flexGrow: 1,
  },
  menuButton: {
	marginRight: theme.spacing(2),
  },
  title: {
	flexGrow: 1,
  },
}));

export default function Menu(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  return (
      <div className="relative bg-white overflow-hidden mb-24">
      <div className="max-w-screen-xl mx-auto">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
      	<polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
      	<nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
      	  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
      		<div className="flex items-center justify-between w-full md:w-auto">
      		  <Link to="/" className="text-white">
      			<img className="h-8 w-auto sm:h-24" src="/src/img/logo.png" alt="Logo"/>
      		  </Link>
      		  <div className="-mr-2 flex items-center md:hidden">
      			<button onClick={() => setExpanded(true)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
      			  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
      				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      			  </svg>
      			</button>
      		  </div>
      		</div>
      	  </div>
      	  <div className="hidden md:block md:ml-10 md:pr-4">
      		<Link to="/impressum"  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Impressum</Link>
      		<Link to="/datenschutz" className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Datenschutz</Link>
      	  </div>
      	</nav>
        </div>
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      	<div className="rounded-lg shadow-md">
      	  <div className="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
      		<div className={`px-5 pt-4 flex items-center justify-between ${expanded ? 'expanded' : 'hidden'}`}>
      		  <div>
      			<img className="h-8 w-auto" src="/src/img/logo.png" alt="Logo"/>
      		  </div>
      		  <div className="-mr-2">
      			<button onClick={() => setExpanded(false)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
      			  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
      				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      			  </svg>
      			</button>
      		  </div>
      		</div>
      		<div className={`px-2 pt-2 pb-3 ${expanded ? 'expanded' : 'hidden'}`}>
      		  <Link to="/impressum" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Impressum</Link>
      		  <Link to="/datenschutz" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Datenschutz</Link>
      		</div>
      	  </div>
      	</div>
        </div>

        <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      	<div className="sm:text-center lg:text-left">
      	  <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
      		{props.title}
      	  </h1>
      	  {props.content ? props.content : null}
          { ! props.cta ? '' :
          	  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          		<div className="rounded-md shadow">
          		  <a href="tel:+49942112340" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
          			Telefon
          		  </a>
          		</div>
          		<div className="mt-3 sm:mt-0 sm:ml-3">
          		  <a href="mailto:muehlenbaecker@kornundschrot.de" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-orange hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    E-Mail
                  </a>
          		</div>
          	  </div>
            }
      	</div>
        </main>
      </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/src/img/feld.jpg" alt=""/>
      </div>
      </div>
  );
}
