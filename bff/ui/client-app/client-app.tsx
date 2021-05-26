import React, { ReactNode, useState } from 'react';
import {useEffect} from 'react';
import {ServiceResponseType, PersonType} from '@deleteman/bff.bff-types';


export function ClientApp(props: {defaultMessage: string}) {
  let [items, setItems] = useState([])
  let [error, setError] = useState(null)

  useEffect(() => {
    fetch("http://localhost:8000")
      .then(res => res.json())
      .then(
        (result: ServiceResponseType) => {
          setItems(result as ServiceResponseType);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])

  if(error) {
    return (<div >
        <p>Error found: {error.message}</p>
        <p>{props.defaultMessage}</p>
    </div>)
  }
  return (
    <div>
      {renderPeople(items)}
    </div>
  );
}

function renderPeople(ppl: ServiceResponseType): ReactNode[] {
  return ppl.map( (person: PersonType) => {
    return <div key={person.name + person.age}>
      <p>Name: {person.name} </p>
      <p>Age: {person.age} </p>
      <p>Address: {person.address} </p>
    </div>
  })
}
