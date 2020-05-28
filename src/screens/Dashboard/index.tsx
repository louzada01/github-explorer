/* eslint-disable camelcase */
import React, { useEffect, useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const localStorageRepositories = localStorage.getItem(
      '@GITHUB_EXPLORER:Repositories',
    );

    if (localStorageRepositories) {
      return JSON.parse(localStorageRepositories);
    }
    return [];
  });
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    localStorage.setItem(
      '@GITHUB_EXPLORER:Repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  const handleAddRepository = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite um valor para buscar');
      return;
    }
    const findLocalRepository = repositories.find(
      (repo) => repo.full_name === newRepo,
    );
    if (findLocalRepository) {
      setInputError('Esse repo já foi adicionado');
      return;
    }
    try {
      const { data: response } = await gitHubApi.get<Repository>(
        `/repos/${newRepo}`,
      );
      setNewRepo('');
      setInputError('');
      setRepositories([...repositories, response]);
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
          placeholder="Qual repo deseja pesquisar? Ex: facebook/react"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map((repo) => (
          <Link key={repo.full_name} to={`/repository/${repo.full_name}`}>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
