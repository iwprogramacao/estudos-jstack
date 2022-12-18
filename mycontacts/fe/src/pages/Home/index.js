import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  ContactsListContainer, Header, ListContainer, Card, InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/contacts')
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((err) => { console.log(err); });
  }, []);

  console.log(contacts);

  return (
    <ContactsListContainer>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Igor Wiepieski</strong>
              <small>Instagram</small>
            </div>
            <span>igor@mail.com</span>
            <span>45 99999-8888</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Editar contato" />
            </Link>
            <button type="button">
              <img src={trash} alt="Deletar contato" />
            </button>
          </div>
        </Card>
      </ListContainer>

    </ContactsListContainer>
  );
}
