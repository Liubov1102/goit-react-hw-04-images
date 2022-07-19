import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { BtnLoadMore } from './components/BtnLoadMore/BtnLoadMore';
import { Loader } from "./components/Loader/Loader";
import { Modal } from './components/Modal/Modal';
import { getImages } from './services/api';
import { Box } from "./components/Box";

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [imgData, setImgData] = useState(null);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    const fetchGalleryItems = () => {
      setIsLoading(true);

      getImages({ q: searchQuery, page })
        .then(res => {
          setItems(prevState => [...prevState, ...res]);
          setIsLoading(false);
       
          if (res.length === 0) {
            return toast.error(
              'Oh, the search results were not successful. Try again.'
            );
          }
        })
        .catch(error => {
          setIsLoading({ isLoading: false, });
          toast.error(`Sorry something went wrong.`);
        });
    };
    fetchGalleryItems();
  }, [page, searchQuery]
  );

  const handleSubmit = ({ searchQuery }) => {
    if (searchQuery.trim() !== '') {
      setSearchQuery(searchQuery);
      setPage(1);
      setIsLoading(false);
      setItems([]);
    }
  };

  const loadMore = () => {
    setPage(page => page + 1);
  };

 const toggleModal = imgData => {
    setImgData(imgData)
    };

    return (
      <Box>
        <SearchBar onSubmit={handleSubmit} />
        {items.length !== 0 && (
          <ImageGallery
            items={items}
            toggleModal={toggleModal}
          />
        )}
        {isLoading && <Loader />}
        {items.length > 0 && <BtnLoadMore onClick={loadMore}>Load more </BtnLoadMore>}
        {imgData && (
          <Modal item={items} onClose={toggleModal}>
            <img alt={imgData.alt} src={imgData.url} />
          </Modal>
        )}
         <ToastContainer autoClose={3000} theme="colored"pauseOnHover position="top-center"/>
      </Box>
    );
  
};


