import * as React from 'react';

import { MenuItem } from '../utils/types';

import { useState } from 'react';

import image from '*.png'

import { DropdownHeader, DropdownItemContainer, DropdownItem, DropdownFooter, Button, Input } from '../utils/styles';

type Props = {
    title: String;
    items: MenuItem[];
}

export const Dropdown = ({title, items}: Props) => {

    const [ selected, setSelected] = useState<MenuItem | undefined>();
    const [expanded, setExpanded] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const [searchResults, setSearchResults] = useState<MenuItem[]>(items);
    const handleSave = () => {

    }

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { value }  = event.currentTarget;
        setSearch(value);
        const filtered = items.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(filtered);
    }

    const resetState = () => {
        setExpanded(false);
        setSearchResults(items);
        setSelected(undefined);
        setSearch("");
    }
  return (
      <div>
          <DropdownHeader onClick= {() => setExpanded(!expanded)}>
              <p>{title}</p>
              <p>{selected && selected.name}</p>
          </DropdownHeader>
          <DropdownItemContainer expanded={expanded}>
              {searchResults.map((item) => (
              <DropdownItem 
              onClick={() => setSelected(item)} isSelected={selected && item.value
              === selected.value}>
                  {item.name}
            </DropdownItem> )
              )}
          </DropdownItemContainer>
          {expanded && (
              <DropdownFooter>
              <div>
                  <Button onClick= {handleSave}style={{marginRight: '5px'}} disabled={!selected}> Save </Button>
                  <Button onClick= {resetState}> Collpase List </Button>
              </div>
              <div>
                  <Input placeholder="Search Role" onChange={handleChange} value={search}/>
              </div>
          </DropdownFooter>
          )}
      </div>
  );
};