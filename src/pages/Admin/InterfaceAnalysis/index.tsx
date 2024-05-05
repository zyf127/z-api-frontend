import {
  PageContainer,
} from '@ant-design/pro-components';
import '@umijs/max';
import React, {useEffect, useState} from 'react';
import ReactECharts from 'echarts-for-react';
import {listTopInvokeInterfaceUsingGet} from "@/services/z-api-backend/analysisController";
import {message} from "antd";

const InterfaceAnalysis: React.FC = () => {

  const [data, setData] = useState<API.InterfaceInfoVO[]>([]);
  const [loading, setLoading] = useState(true);

  const INTERFACE_NUM = 3;

  useEffect(() => {
    try {
      listTopInvokeInterfaceUsingGet({
        interfaceNum: INTERFACE_NUM
      }).then(res => {
        if (res.data) {
          setData(res.data);
        }
      })
    } catch (error: any) {
      message.error('接口分析失败，' + error.message);
    }
  }, []);

  const chartData = data.map(item => {
    return {
      value: item.usedNum,
      name: item.name,
    }
  })

  const option = {
    title: {
      text: `调用次数最多的接口 Top${INTERFACE_NUM}`,
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
  legend: {
      orient: 'vertical',
      left: 'left',
      itemWidth: 60,
      itemHeight: 30,
    },
    series: [
      {
        name: '接口名称-调用次数',
        type: 'pie',
        center: ['50%', '55%'],
        radius: '80%',
        data: chartData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  return (
    <PageContainer>
      <ReactECharts option={option} loadingOption={{showLoading: loading}}/>
    </PageContainer>
  );
};
export default InterfaceAnalysis;
