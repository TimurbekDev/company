import { useRef, useState, useMemo } from 'react';
import { Button, Dropdown, Popconfirm, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, MoreOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { deleteCompany, getAllCompany, updateCompany } from '../services';
import { ICompany, IUpdateCompany } from '../types';
import { CustomTable, Header, Input } from '../components';

const Dashboard = () => {

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [modal, setModal] = useState<boolean>(false);
  const [editData, setEditData] = useState<{
    id: string | null;
    name: string;
    count: number;
  }>({
    id: null,
    name: '',
    count: 0,
  });

  const mutation = deleteCompany();
  const updateMutation = updateCompany();
  const companies = getAllCompany();

  const getMenu = (id: string) => ({
    items: [
      {
        key: "edit",
        label: "Изменить",
        icon: <EditOutlined className='!text-xl' />,
        onClick: () => handleEdit(id),
        className: "h-13 !text-[17px] w-[130px] flex items-center",
      },
      {
        key: "delete",
        label: (
          <Popconfirm
            title="Удалить компанию"
            description="Вы уверены, что хотите удалить эту компанию?"
            icon={<ExclamationCircleFilled style={{ color: 'red' }} />}
            onConfirm={() => handleDelete(id)}
            rootClassName='!w-[270px] lg:!text-xl'
            okText="Да"
            cancelText="Нет"
            placement='top'
          >
            <span className='text-[17px]'>Удалить</span>
          </Popconfirm>
        ),
        icon: <DeleteOutlined className="text-red-500 !text-xl" />,
        danger: true,
        className: "h-13 w-[130px] flex !hover:text-white items-center",
      },
    ],
  });

  const handleDelete = (id: string) => {
    mutation.mutate(id);
  };

  const handleEdit = (id: string) => {
    const company = companies.find((c: any) => c.id === id);
    if (company) {
      setModal(true);
      setEditData({
        id: company.id,
        name: company.name,
        count: company.count,
      });
    }
  };

  const handleEditModal = () => {
    if (editData.id && editData.name && editData.count) {
      const data: IUpdateCompany = {
        id: editData.id,
        name: editData.name,
        count: editData.count,
      };
      updateMutation.mutate(data);
      setModal(false);
      resetForm();
    }
  };

  const resetForm = () => {
    setEditData({
      id: null,
      name: '',
      count: 0,
    });
  };

  const columns = useMemo(() => [
    {
      key: '1',
      title: 'Названия компании',
      dataIndex: 'name',
      align: 'center' as const
    },
    {
      key: '2',
      title: 'Количество сотрудников',
      dataIndex: 'count',
      align: 'center' as const
    },
    {
      key: '3',
      title: '',
      dataIndex: 'id',
      align: 'center' as const,
      render: (id: string) => (
        <Dropdown
          menu={{ items: getMenu(id).items }}
          trigger={["click"]}
          placement="topLeft"
          getPopupContainer={() => dropdownRef.current || document.body}
        >
          <Button
            className="text-2xl font-bold"
            type="link"
            icon={<MoreOutlined className='!text-xl !font-semibold' />}
          />
        </Dropdown>
      ),
    },
  ], [companies]);

  return (
    <div>
      <Header />
      <div className="px-4">
        {companies.length > 0 ? (
          <CustomTable
            columns={columns}
            scroll={{ x: 4, y: 700 }}
            data={companies.map((company: ICompany, index: number) => ({
              ...company,
              count: `${company.count} человек`,
              key: index + 1,
            }))}
          />
        ) : (
          <div>Нет доступных компаний.</div>
        )}
        <Modal
          open={modal}
          onCancel={() => {
            setModal(false);
            resetForm();
          }}
          onOk={handleEditModal}
        >
          <div className="pt-5 flex flex-col gap-3">
          <span className='text-2xl font-bold py-5'>Редактировать компанию</span>
            <div className="flex flex-col lg:flex-row items-center">
              <label className="text-xl font-semibold w-[270px]">
                Названия компании
              </label>
              <Input
                label=""
                value={editData.name}
                type="text"
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                placeholder="Введите названия"
                extraClass="h-12"
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center">
              <label className="text-xl font-semibold text-center w-[270px]">
                Количество сотрудников
              </label>
              <Input
                type="number"
                label=""
                value={`${editData.count}`}
                onChange={(e) => setEditData({ ...editData, count: Number(e.target.value) })}
                placeholder="Введите количество"
                extraClass="h-12"
              />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;
