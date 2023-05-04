<template>
    <div
            class="abstract-item draw"
            @click="$router.push(item.path)">
        <i v-if="item.frontmatter.sticky" class="iconfont reco-sticky"></i>
        <div class="cover">
            <img class="cover-img" :src="item.frontmatter.cover
      || 'https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/e6c9d24ely1go71bxll33j21hb0u0npl.jpg'" :alt="item.title"/>
        </div>
        <div class="info">
            <div class="title">
                <i v-if="item.frontmatter.keys" class="iconfont reco-lock"></i>
                <router-link :to="item.path">{{item.title}}</router-link>
            </div>
            <div class="abstract" v-html="item.excerpt"></div>
            <PageInfo
                    :pageInfo="item"
                    :currentTag="currentTag">
            </PageInfo>
        </div>
    </div>
</template>

<script>
    import PageInfo from './PageInfo'

    export default {
        components: {PageInfo},
        props: ['item', 'currentPage', 'currentTag']
    }
</script>

<style lang="stylus" scoped>
    @require '../styles/mode.styl'
    .abstract-item
        position relative
        display inline-flex
        margin: 0 auto 20px;
        padding: 16px 20px;
        width 100%
        overflow: hidden;
        border-radius: $borderRadius
        box-shadow: var(--box-shadow);
        box-sizing: border-box;
        transition all .3s
        background-color var(--background-color)
        cursor: pointer;

        .abstract
            margin 0 1rem

        > * {
            pointer-events: auto;
        }

        .cover
            max-width 320px
            flex 1
            overflow hidden
            border-radius .5rem

        .cover-img
            border-radius .5rem
            max-width 320px
            transition: 1s ease-out;

        .cover-img:hover
            transform: scale3d(1.1, 1.1, 1);

        .info
            flex 1
            display: flex;
            flex-direction: column;
            justify-content: center;

        .reco-sticky
            position absolute
            top 0
            left 0
            display inline-block
            color $accentColor
            font-size 2.4rem

        &:hover
            box-shadow: var(--box-shadow-hover)

        .title
            position: relative;
            font-size: 1.28rem;
            line-height: 46px;
            display: inline-block;
            margin 0 2rem

            a
                color: var(--text-color);

            .reco-lock
                font-size 1.28rem
                color $accentColor

            &:after
                content: "";
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: 0;
                left: 0;
                background-color: $accentColor;
                visibility: hidden;
                -webkit-transform: scaleX(0);
                transform: scaleX(0);
                transition: .3s ease-in-out;

            &:hover a
                color $accentColor

            &:hover:after
                visibility visible
                -webkit-transform: scaleX(1);
                transform: scaleX(1);

        .tags
            .tag-item
                &.active
                    color $accentColor

                &:hover
                    color $accentColor

    @media (max-width: $homePageWidth)
        .cover
            max-width 200px
            flex 1
            overflow hidden
            border-radius .5rem
            display flex
            align-items: center

            .cover-img
                border-radius .5rem
                max-width 200px
                transition: 1s ease-out;

        .info
            flex 2 !important

    @media (max-width: 1080px)
        .cover
            display none

    @media (max-width: $MQMobile)
        .tags
            display block
            margin-top 1rem;
            margin-left: 0 !important;

        .abstract-item
            display block
            text-align center

            .cover
                width 100%
                display inline-flex
                max-width 320px

                .cover-img
                    max-width 320px
                    width inherit

            .info
                .title
                    margin 0

    div.draw{
        background: none;
        border: 0;
        box-sizing: border-box;
    }

    div.draw::before, div.draw::after {
        box-sizing: inherit;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
    }

    div.draw {
        transition: color 0.25s;
    }

    div.draw::before, div.draw::after {
        border: 2px solid transparent;
        width: 0;
        height: 0;
    }

    .draw::before {
        top: 0;
        left: 0;
    }

    .draw::after {
        bottom: 0;
        right: 0;
    }

    .draw:hover {
        color: #60daaa;
    }

    .draw:hover::before, .draw:hover::after {
        width: 100%;
        height: 100%;
    }

    .draw:hover::before {
        border-top-color: #60daaa;
        border-right-color: #60daaa;
        transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
    }

    .draw:hover::after {
        border-bottom-color: #60daaa;
        border-left-color: #60daaa;
        transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
    }
</style>
