import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
  {
    label: (
      <a href="/">
        Home
      </a>
    ),
    key: 'home',
  },
  {
    label: (
      <a href="/adicionar">
        Adicionar tarefa
      </a>
    ),
    key: 'tarefa',
  },
];

const HeaderMenu: React.FC = () => {

  return (
    <Menu  
    mode="horizontal" items={items} />
  )
};

export default HeaderMenu;