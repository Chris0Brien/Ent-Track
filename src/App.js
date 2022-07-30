import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Animelog from './components/Anime/Anime';
import Bookslog from './components/Books/Books';
import Movielog from './components/Movies/Movies';
import Mangalog from './components/Manga/Manga';
import NewAnimeForm from './components/Anime/NewAnime';
import NewBookForm from './components/Books/NewBook';
import NewMangaForm from './components/Manga/NewManga';
import NewMovieForm from './components/Movies/NewMovie';
import PrimaryNavbar from './components/Navbar';


function App() {

  return (
    <div className='App'>
    <BrowserRouter>
      <main>
        <div className='App-header'>
          <PrimaryNavbar /> 
        </div>
        <div>
              <Routes>

                <Route path="/" element={<Home />}/>
                <Route path="/Anime" element={<Animelog />}/>
                <Route path="/Books" element={<Bookslog />}/>
                <Route path="/Manga" element={<Mangalog />}/>
                <Route path="/Movies" element={<Movielog />}/>
                <Route path="/Anime/New" element={<NewAnimeForm />}/>
                <Route path="/Manga/New" element={<NewMangaForm />}/>
                <Route path="/Books/New" element={<NewBookForm />}/>
                <Route path="/Movies/New" element={<NewMovieForm />}/>

              </Routes>  
        </div>
      </main>
    </BrowserRouter>
    </div>
    );
  }
  
  export default App;
