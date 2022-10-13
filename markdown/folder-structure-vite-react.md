## Components

<code language="javascript">
mkdir -p src/components,src/components/layouts,src/components/pages
</code>

## Type script folders

Create React Component folder [view](https://www.npmjs.com/package/create-react-component-folder?activeTab=readme)

<code language="javascript">
pnpm install --save-dev create-react-component-folder
</code>

Layouts

- no css
  <code language="javascript">
  cd src/components/layouts
  npx crcf -f --notest --nocss --typescript Aside Header Footer
  cd ../../..
  </code>

- css
  <code language="javascript">
  cd src/components/layouts
  npx crcf -f --notest --typescript Aside Header Footer
  cd ../../..
  </code>

- sass
  <code language="javascript">
  cd src/components/layouts
  npx crcf -f -s --notest --typescript Aside Header Footer
  cd ../../..
  </code>

Pages

- no css
  <code language="javascript">
  cd src/components/pages
  npx crcf -f --notest --nocss --typescript Home
  cd ../../..
  </code>

- css
  <code language="javascript">
  cd src/components/pages
  npx crcf -f --notest --typescript Home
  cd ../../..
  </code>

- sass
  <code language="javascript">
  cd src/components/pages
  npx crcf -f -s --notest --typescript Home
  cd ../../..
  </code>
