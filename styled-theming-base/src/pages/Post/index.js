import React, { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function Home() {
  const params = useParams();
  const { search } = useLocation();

  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  return <h1>Post page</h1>;
}
