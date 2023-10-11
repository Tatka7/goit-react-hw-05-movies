import PropTypes from 'prop-types';

import { List, ListItem, Image, Character, Name, Wrapper } from './Cast.styled';

export default function CastData({ cast }) {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';
  const defaultImage =
    'https://i.postimg.cc/Bvs51Cct/360-F-234348839-k-Inlh-Js-XZez-Ky-Tb-XHde6693v-S9-Aby4e-Z.jpg';

  return (
    <List>
      {cast.map(actor => (
        <ListItem key={actor.cast_id}>
          <Image
            src={
              actor.profile_path ? IMAGE_URL + actor.profile_path : defaultImage
            }
            alt={actor.name}
          />
          <Character>
            <Name>
              <Wrapper></Wrapper> {actor.name}
            </Name>
            <Name>
              <Wrapper></Wrapper> {actor.character}
            </Name>
          </Character>
        </ListItem>
      ))}
    </List>
  );
}

CastData.prototype = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number,
      profile_path: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
    })
  ),
};
