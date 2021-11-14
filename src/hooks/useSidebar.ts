export interface ISidebar {
  isOpen: boolean;
}
export function useSidebar(): ISidebar {
  const isOpen = false;
  return {
    isOpen,
  };
}
