import ActoresPage from '../Actores/index.tsx';
import { DesktopOutlined } from '@ant-design/icons'
import { AdminRouterItem } from "../../router";
//import DemoChart from "./chart";
//import DemoTable from "./table";
import { Outlet } from "react-router-dom";

const actoresRouter: AdminRouterItem[] = [
  {
    path: 'Actores',
    element: <ActoresPage />,
    meta: {
      label: "Producer",
      title: "Productor",
      key: "/producer",
      icon: <DesktopOutlined />,
    },
    children: [{
      path: 'chart',
      element: <ActoresPage />,
      meta: {
        label: "chart",
        title: "chart",
        key: "/demo/chart",
        icon: <DesktopOutlined />,
      }
    }, {
      path: 'table',
      element: <DemoTable />,
      meta: {
        label: "table",
        title: "table",
        key: "/demo/table",
        icon: <DesktopOutlined />,
      }
    }, {
      path: 'nested',
      element: <Outlet />,
      meta: {
        label: "nested",
        title: "nested",
        key: "/demo/nested",
        icon: <DesktopOutlined />,
      },
      children: [{
        path: 'table',
        element: <DemoTable />,
        meta: {
          label: "table",
          title: "table",
          key: "/demo/nested/table",
          icon: <DesktopOutlined />,
        }
      }]
    }]
  },
]

export default actoresRouter;
