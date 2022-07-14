import { Component } from 'react';

import { SearchBar } from './components/SearchBar/SearchBar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { BtnLoadMore } from './components/BtnLoadMore/BtnLoadMore';
import { Loader } from "./components/Loader/Loader";
import { Modal } from './components/Modal/Modal';
import { getImages } from './services/api';
import { params } from './services/params';
import { Box } from "./components/Box";

export class App extends Component {
  state = {
    isLoading: false,
    searchQuery: '',
    page: 1,
    items: [],
    showModal: false,
    activeIndex: null,
  };

  componentDidMount() {
    this.setState({ items: [] });
  }

 async componentDidUpdate(_, prevState) {
    const { page, searchQuery } = this.state;

    if (prevState.page !== page || prevState.searchQuery !== searchQuery) {
      this.setState({ isLoading: true });
      if (page === 1) {
        this.setState({ items: [] });
      }
      this.fetchGalleryItems();
    }
  }

  fetchGalleryItems = () => {
    const { searchQuery, page } = this.state;

    getImages({ ...params, page, q: searchQuery })
      .then(res => {
        this.setState(prevState => ({
          items: [...prevState.items, ...res],
          isLoading: false,
        }));
        if (res.length === 0) {
          return alert(
            'Oh, the search results were not successful. Try again.'
          );
        }
      })
      .catch(error => {
        this.setState({
          isLoading: false,
        });
      });
  };

   handleSubmit = ({ searchQuery }) => {
    if (searchQuery.trim() !== '') {
      return this.setState({ searchQuery, page: 1 });
    }
    this.setState({ isLoading: false, items: [] });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  setActiveIndex = index => {
    this.setState({ activeIndex: index });
  };

  render() {
  const {  showModal, items, activeIndex, isLoading} = this.state;
    return (
      <Box>
        <SearchBar onSubmit={this.handleSubmit} />
        {items.length !== 0 && (
          <ImageGallery
            items={items}
            toggleModal={this.toggleModal}
            setActiveIndex={this.setActiveIndex}
            loadMore={this.loadMore}
          />
        )}
        {isLoading && <Loader />}
        {items.length > 0 && <BtnLoadMore loadMore={this.loadMore} />}
        {showModal && (
          <Modal item={items[activeIndex]} onClose={this.toggleModal} />
        )}
      </Box>
    );
  };
};

