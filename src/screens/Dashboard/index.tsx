/* eslint-disable camelcase */
import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { gitHubApi } from '../../services/api';

import Logo from '../../assets/logo.svg';
import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  const handleAddRepository = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite um valor para buscar');
      return;
    }
    try {
      const { data: response } = await gitHubApi.get<Repository>(
        `/repos/${newRepo}`,
      );

      setRepositories([...repositories, response]);
      setNewRepo('');
      setInputError('');
    } catch (error) {
      setInputError('Verifique os dados informados');
    }
  };

  return (
    <>
      <img src={Logo} alt="GitHub Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite aqui para pesquisar"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map((repo) => (
          <a key={repo.full_name} href="/">
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
