import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from '@mussia10/theme-provider';
import { Pagination, PaginationProps } from './pagination';
import { useEffect, useState } from 'react';

export default {
  component: Pagination,
  title: 'Pagination',
  argTypes: {
    page: {
      description: 'Current page, starts count from 0',
    },
  },
} as Meta;

const Template: Story<PaginationProps> = (args) => {
  const { page } = args;
  const [curPage, setPage] = useState(page);

  useEffect(() => {
    setPage(page);
  }, [page]);

  const handleChangePage: PaginationProps['onChangePage'] = (e, p) => {
    setPage(p);
  };

  return (
    <ThemeProvider>
      <Pagination {...args} page={curPage} onChangePage={handleChangePage} />
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  page: 1,
  count: 100,
  rowsPerPage: 20,
};
