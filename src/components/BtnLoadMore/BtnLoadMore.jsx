
import { LoadMore } from './BtnLoadMore.styled';

export const BtnLoadMore = ({ onClick, children  }) => (
    <LoadMore type="button" onClick={onClick}>
        {children}
    </LoadMore>
);



