FROM node:lts-alpine AS node_git
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories \
  && apk add --no-cache git

FROM node_git AS arya
RUN git config --global https.proxy 'http://10.222.1.1:7890' \
  && git clone https://github.com/nicejade/markdown-online-editor.git \
  && cd markdown-online-editor \
  && env PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn \
  && mkdir -p /markdown-online-editor/node_modules/vditor/dist/css/content-theme
#   && yarn build; yarn cache clean

COPY light-autonum.css /markdown-online-editor/node_modules/vditor/dist/css/content-theme/

WORKDIR /markdown-online-editor
CMD [ "yarn", "start" ]
# CMD [ "npm", "start" ]

