import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled'

export const ImageGallery = ({ items, toggleModal }) => {
    
    return (
        <Gallery>
            {items.map((item) => (
      
                <ImageGalleryItem
                    item={item}
                    key={item.id}
                    preview={item.webformatURL}
                    url={item.largeImageURL}
                    alt={item.tags}
                    toggleModal={toggleModal}
                />
            )
            )}
        </Gallery>
    );
};

ImageGallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape).isRequired,
    toggleModal: PropTypes.func.isRequired,
};

