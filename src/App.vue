<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-3">
            <div class="content">
              <h1>CompanyDB</h1>
            </div>
            <aside class="menu">
              <p class="menu-label">
                Companies
              </p>
              <ul class="menu-list">
                <li>
                  <router-link to="/">Overview</router-link>
                  <router-link :to="{ name: 'NewCompany'}">
                    Add new
                  </router-link>
                </li>
              </ul>
            </aside>
          </div>
          <div class="column">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
