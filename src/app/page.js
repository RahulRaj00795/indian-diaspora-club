"use client";

import { Button, Card, Typography, Space, Divider } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  TeamOutlined, 
  CalendarOutlined, 
  GlobalOutlined 
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Space align="center">
            <GlobalOutlined style={{ fontSize: 24 }} />
            <Title level={2} style={{ margin: 0 }}>Indian Diaspora Club</Title>
          </Space>
          
          <Divider />
          
          <Space direction="vertical" size="middle">
            <Paragraph>
              Welcome to the Indian Diaspora Club! This is a sample page demonstrating Ant Design components and icons.
            </Paragraph>
            
            <Space wrap>
              <Button type="primary" icon={<HomeOutlined />}>
                Home
              </Button>
              <Button icon={<UserOutlined />}>
                Profile
              </Button>
              <Button icon={<TeamOutlined />}>
                Members
              </Button>
              <Button icon={<CalendarOutlined />}>
                Events
              </Button>
            </Space>
          </Space>
        </Card>
      </Space>
    </div>
  );
}
