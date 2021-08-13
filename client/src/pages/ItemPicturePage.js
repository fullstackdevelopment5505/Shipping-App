import Page from 'components/Page';
import React from 'react';
import {
  FormText,
} from 'reactstrap';

const ItemPicturePage = () => {
  return (
    <Page title="Item Picture" >
    
        <FormText>
            You do not have any purchage history in the last month.
        </FormText>
      
    </Page>
  );
};

export default ItemPicturePage;
