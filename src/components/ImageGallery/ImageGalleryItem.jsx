import PropTypes from 'prop-types';
import { GalleryItem, GalleryImg } from './ImageGallery.styled';

export const ImageGalleryItem = ({item, onClick }) => {
    return (
        <GalleryItem onClick= {onClick}>
            <GalleryImg src={item.webformatURL} alt={item.tags}/>
        </GalleryItem>
    );
};

ImageGalleryItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    item: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }),
};


