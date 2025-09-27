
'use client';

import { Layout, Menu, Typography, Card, Row, Col, Button, Divider, List, Drawer } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  TrophyOutlined, 
  ReadOutlined,
  CalendarOutlined,
  ContactsOutlined,
  GlobalOutlined,
  TwitterOutlined,
  FacebookOutlined,
  MenuOutlined
} from '@ant-design/icons';
import { useState, useEffect } from 'react';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function Home() {
  // State for mobile menu drawer
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [news, setNews] = useState([]);
  const [achievers, setAchievers] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        if (response.ok) {
          const data = await response.json();
          setNews(data);
        } else {
          console.error('Failed to fetch news');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    const fetchAchievers = async () => {
      try {
        const response = await fetch('/api/achievers');
        if (response.ok) {
          const data = await response.json();
          setAchievers(data);
        } else {
          console.error('Failed to fetch achievers');
        }
      } catch (error) {
        console.error('Error fetching achievers:', error);
      }
    };

    fetchNews();
    fetchAchievers();
  }, []);

  // Menu items array for reuse
  const menuItems = [
    { key: 'home', icon: <HomeOutlined />, label: 'Home' },
    { key: 'about', icon: <UserOutlined />, label: 'About Us' },
    { key: 'achievers', icon: <TrophyOutlined />, label: 'Diaspora Achievers' },
    { key: 'gallery', icon: <ReadOutlined />, label: 'Gallery' },
    { key: 'news', icon: <ReadOutlined />, label: 'Diaspora News' },
    { key: 'events', icon: <CalendarOutlined />, label: 'Events' },
    { key: 'contact', icon: <ContactsOutlined />, label: 'Contact Us' }
  ];

  return (
    <Layout className="min-h-screen">
      {/* Navigation Header */}
      <Header className="p-0 bg-white sticky top-0 z-10 shadow-md">
        <div className="flex justify-between items-center px-4 md:px-8 h-full">
          <div className="flex items-center">
            <GlobalOutlined className="text-2xl mr-2" />
            <span className="text-lg font-bold">Indian Diaspora Club</span>
          </div>
          
          <Menu
            mode="horizontal"
            className="border-0 hidden md:flex"
            items={menuItems}
          />
          
          <Button 
            type="primary" 
            className="md:hidden flex items-center"
            icon={<MenuOutlined />}
            onClick={() => setMobileMenuOpen(true)}
          />
          
          {/* Mobile Menu Drawer */}
          <Drawer
            title="Menu"
            placement="right"
            onClose={() => setMobileMenuOpen(false)}
            open={mobileMenuOpen}
            width={280}
          >
            <Menu
              mode="vertical"
              items={menuItems}
              onClick={() => setMobileMenuOpen(false)}
            />
          </Drawer>
        </div>
      </Header>

      {/* Banner Section */}
      <div className="w-full bg-blue-100 py-8 px-4 md:px-8 lg:px-16">
        <Title level={2} className="text-center">Indian Diaspora Club</Title>
        <Paragraph className="text-center max-w-3xl mx-auto">
          Connecting the Indian diaspora community worldwide through events, news, and achievements.
        </Paragraph>
      </div>

      <Content className="p-4 md:p-8 lg:p-16">
        {/* News Section */}
        <Row gutter={[24, 24]}>
          <Col xs={24} md={16}>
            <Card title="Featured News" className="h-full">
              {
                news.length > 0 &&
                <div className="border rounded p-4 mb-4">
                  <img src={news[0].image} alt={news[0].title} className="w-full h-64 object-cover mb-4" />
                  <Title level={4}>{news[0].title}</Title>
                  <Paragraph>{news[0].description}</Paragraph>
                  <Button type="link" href={news[0].link} target="_blank">Read More</Button>
                </div>
              }
            </Card>
          </Col>
          
          <Col xs={24} md={8}>
            <Card title="Latest News" className="h-full">
              <List
                itemLayout="vertical"
                dataSource={news}
                renderItem={(item) => (
                  <List.Item
                    extra={<img width={150} alt={item.title} src={item.image} />}
                  >
                    <Title level={5}>{item.title}</Title>
                    <Paragraph ellipsis={{ rows: 2 }}>{item.description}</Paragraph>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>

        {/* Publications Section */}
        <Row gutter={[24, 24]} className="mt-8">
          <Col xs={24} md={8}>
            <Card title="Publications" className="h-full">
              <div className="text-center p-4">
                <Title level={4}>Magazine</Title>
                <Paragraph>Our latest publications and magazines</Paragraph>
              </div>
            </Card>
          </Col>
          
          <Col xs={24} md={16}>
            <Row gutter={[16, 16]}>
              {/* Diaspora Achievers Section */}
              <Col xs={24} sm={12}>
                <Card title="Diaspora Achievers" className="h-full">
                  <List
                    itemLayout="horizontal"
                    dataSource={achievers}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<UserOutlined />}
                          title={item.name}
                          description={item.description}
                        />
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
              
              <Col xs={24} sm={12}>
                <Card title="Diaspora" className="h-full">
                  <Paragraph>Information about the Indian diaspora community</Paragraph>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>

      <Footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <Row gutter={16} className="py-4">
            <Col xs={24} md={12}>
              <Title level={5}>Indian Diaspora Club</Title>
              <Paragraph>Connecting the Indian diaspora worldwide</Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <div className="flex justify-start md:justify-end gap-4 mt-4 md:mt-0">
                <Button icon={<TwitterOutlined />} shape="circle" />
                <Button icon={<FacebookOutlined />} shape="circle" />
                <Button>Reach Us</Button>
              </div>
            </Col>
          </Row>
        </div>
      </Footer>
    </Layout>
  );
}
