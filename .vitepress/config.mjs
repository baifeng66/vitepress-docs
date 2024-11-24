import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";	// 改成自己的路径
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-docs/',
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "白枫66全栈编程",
  description: "白枫66的全栈知识库 | Java | Python | Vue",
  themeConfig: {
    aside: 'left',
    sidebar: false,
    outlineTitle: '文章目录',
    outline: [1,6],
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Java', items:[
        { text: '测试Java1', link: '/posts/java/test1' },
        { text: '测试Java2', link: '/posts/java/test2' },
      ]},
      { text: 'Front', items: [
          { text: '1', link: '/posts/front' },
          { text: '2', link: '/posts/front' },
      ]},
      { text: 'Python', items: [
          { text: '1', link: '/posts/python' },
          { text: '2', link: '/posts/python' },
      ]},
      { text: 'Go', items: [
          { text: '1', link: '/posts/go' },
          { text: '2', link: '/posts/go' },
      ]},
      { text: 'Other', items: [
          { text: '1', link: '/posts/other' },
          { text: '2', link: '/posts/other' },
      ]},
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    // sidebar: { "/posts/java": set_sidebar("posts/java") },

    socialLinks: [
      { icon: {
        svg: '<svg t="1732431973828" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12348" width="200" height="200"><path d="M512 0C229.283787 0 0.142041 234.942803 0.142041 524.867683c0 231.829001 146.647305 428.553077 350.068189 497.952484 25.592898 4.819996 34.976961-11.38884 34.976961-25.294314 0-12.45521-0.469203-45.470049-0.725133-89.276559-142.381822 31.735193-172.453477-70.380469-172.453477-70.380469-23.246882-60.569859-56.816233-76.693384-56.816234-76.693385-46.493765-32.58829 3.540351-31.948468 3.540351-31.948467 51.356415 3.71097 78.356923 54.086324 78.356923 54.086324 45.683323 80.19108 119.817417 57.072162 148.993321 43.593236 4.649376-33.91059 17.915029-57.029508 32.50298-70.167195-113.675122-13.222997-233.151301-58.223843-233.1513-259.341366 0-57.285437 19.919806-104.163095 52.678715-140.846248-5.246544-13.265652-22.820334-66.626844 4.990615-138.884127 0 0 42.996069-14.076094 140.760939 53.787741 40.863327-11.644769 84.627183-17.445825 128.177764-17.6591 43.465272 0.213274 87.271782 6.014331 128.135109 17.6591 97.679561-67.906489 140.59032-53.787741 140.59032-53.787741 27.938914 72.257282 10.407779 125.618474 5.118579 138.884127 32.844219 36.683154 52.593405 83.560812 52.593405 140.846248 0 201.586726-119.646798 245.990404-233.663158 258.957473 18.341577 16.208835 34.721032 48.199958 34.721032 97.210357 0 70.167195-0.639822 126.7275-0.639823 143.960051 0 14.033439 9.213443 30.370239 35.190235 25.209005 203.250265-69.527373 349.769606-266.123484 349.769605-497.867175C1023.857959 234.942803 794.673558 0 512 0" fill="#3E75C3" p-id="12349"></path></svg>'
      }, link: 'https://github.com/baifeng66/' },
      { icon: {
        svg: '<svg t="1732432038665" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13309" width="200" height="200"><path d="M410.737778 75.093333C180.906667 136.533333 22.755556 370.915556 65.991111 587.093333 117.191111 838.542222 351.573333 1012.622222 583.68 969.386667c250.311111-46.648889 428.942222-285.582222 385.706667-515.413334-35.271111-193.422222-162.702222-331.093333-349.297778-380.017777-81.92-20.48-128.568889-20.48-209.351111 1.137777z m357.262222 237.795556v45.511111l-185.457778 5.688889c-230.968889 6.826667-220.728889-1.137778-216.177778 176.355555l3.413334 125.155556h134.257778c121.742222 0 136.533333-2.275556 151.324444-22.755556 9.102222-12.515556 14.791111-32.995556 13.653333-45.511111-3.413333-20.48-13.653333-23.893333-100.124444-28.444444l-96.711111-5.688889v-91.022222h295.822222l3.413333 91.022222c3.413333 106.951111-17.066667 157.013333-78.506666 190.008889-34.133333 18.204444-62.577778 20.48-232.106667 18.204444l-193.422222-3.413333-2.275556-187.733333c-3.413333-176.355556-2.275556-190.008889 22.755556-232.106667 44.373333-78.506667 76.231111-87.608889 292.408889-84.195556l187.733333 3.413334v45.511111z" fill="#c71c22" p-id="13310"></path></svg>'
      }, link: 'https://gitee.com/xiaokuangshen' },
      {
        icon: {
          svg: '<svg t="1732432142844" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14342" width="200" height="200"><path d="M511.228735 511.267568m-511.228735 0a511.228735 511.228735 0 1 0 1022.457471 0 511.228735 511.228735 0 1 0-1022.457471 0Z" fill="#ED7826" p-id="14343"></path><path d="M874.256 151.19592c199.648599 199.657229 199.663701 523.355389 0 723.027719-199.648599 199.648599-523.37912 199.657229-723.034192 0L874.256 151.19592z" fill="#DB6D27" p-id="14344"></path><path d="M1004.426058 646.022067L637.660048 279.273316l-74.718826 74.727455-205.05716-28.818331 42.26746 191.599401-147.362248 147.362249 51.800939 51.800939-12.778183 12.778183 288.938394 288.947024c204.474667-27.802203 370.429248-176.424364 423.675634-371.648169z" fill="#CE6028" p-id="14345"></path><path d="M617.270615 781.960969c95.708012 0 173.453647-77.963531 173.99515-173.147298l1.074377-140.145801-1.607251-7.628508-4.59307-9.589571-7.781683-6.021257c-10.098713-7.911126-61.278326 0.532874-75.057535-11.971322-9.768633-8.927254-11.293903-25.064483-14.264621-46.925253-5.497014-42.347284-8.953142-44.56076-15.595726-58.905203-24.095818-50.985448-89.47533-89.298425-134.389901-94.586172h-121.667809c-95.723113 0-173.977891 78.084344-173.977891 173.445017V608.813671c0 95.18161 78.246148 173.147298 173.977891 173.147298h199.888069z m-197.672436-407.232056h96.450151c18.421899 0 33.340207 14.950669 33.340208 33.122312 0 18.098292-14.918308 33.178403-33.340208 33.178403h-96.450151c-18.41327 0-33.307846-15.080112-33.307847-33.178403 0.002157-18.171643 14.894577-33.122311 33.307847-33.122312z m-33.305689 231.510999c0-18.163013 14.894577-32.992868 33.307846-32.992868h195.991834c18.301086 0 33.154672 14.829855 33.154672 32.992868 0 17.936488-14.862216 32.999341-33.154672 32.999341h-195.991834c-18.415427 0-33.307846-15.062853-33.307846-32.999341z" fill="#FFFFFF" p-id="14346"></path></svg>'
        }, link: 'https://baifeng66.github.io/'
      }
    ],

    // 底部配置
    footer: {
      copyright: "Copyright@ 2024 Bai Feng66"
    },

    search :{
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    }
  }
})
