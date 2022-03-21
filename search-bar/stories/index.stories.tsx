import React from 'react';;
import { Searchbar } from '@effinrich/ui/search-bar';
import { storyLayout } from '@effinrich/ui/layout';

export default storyLayout;

const SearchbarShowcase = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export const search_bar = () => <SearchbarShowcase />;