import { useEffect, useRef } from 'react';

const useDocumentTitle = (title, description, prevailOnUnmount = false) => {
  const defaultTitle = useRef(document.title);
  const defaultDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'));

  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]').setAttribute('content', description || defaultDescription.current);
  }, [title, description]);

  // If the component is unmounted, reset the title to the default value
  // If prevailOnUnmount is true, the title will not be reset
  useEffect(() => () => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current;
      document.querySelector('meta[name="description"]').setAttribute('content', defaultDescription.current);
    }
  }, [prevailOnUnmount]);
};

export default useDocumentTitle;
