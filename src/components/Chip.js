import * as React from 'react';
import {Chip} from '@mui/material';
import {Stack} from '@mui/material';
import { addDeletedfilter, removeCollectionFilter } from '../redux/actions/productActions';
import {useDispatch} from "react-redux";

export default function DeletableChips(props) {

      const dispatch=useDispatch()

  const handleDelete = (name) => {
    
    dispatch(removeCollectionFilter(name))
    // dispatch(addDeletedfilter(name))
  };

  return (
      <Chip label={props.val} variant="outlined" onDelete={()=>{handleDelete(props.val)}} />
  );
}