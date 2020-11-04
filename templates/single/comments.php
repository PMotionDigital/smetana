<?php 
$default_avatar = 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg';
$user_ID = get_current_user_id();
?>
<section class="section single-post_comments">
    <div class="section-head dis-flex justify-content-between">
        <p class="head_title">Комментарии</p>
    </div>
    <div class="section-content">
        <?php if(!$comments): ?>
            <p class="single-post_comments-none">Под этой статьей комментарии остутствуют</p>
        <?php endif; ?>

        <?php if(comments_open()) : ?>
            <?php if(get_option('comment_registration') && !$user_ID) : ?>  
                <div class="single-post_comments-info">
                    <p>Комментарии могут оставлять только зарегистрированные
                    пользователи, пожалуйста, 
                    <a  href="<?php echo get_option('siteurl'); ?>/wp-login.php?redirect_to=<?php echo urlencode(get_permalink()); ?>"
                        class="button reply">авторизуйтесь</a></p>
                </div> 
            <?php else : ?>  
                <form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="commentform">  
                    <?php if($user_ID) : ?>  
                        <p>Logged in as <a href="<?php echo get_option('siteurl'); ?>/wp-admin/profile.php"><?php echo $user_identity; ?></a>. <a href="<?php echo get_option('siteurl'); ?>/wp-login.php?action=logout" title="Log out of this account">Log out &raquo;</a></p>  
                    <?php endif; ?>
                    <p><textarea name="comment" id="comment" rows="3" tabindex="4" placeholder="Комментировать"></textarea></p>
                    <?php //show_subscription_checkbox(); ?>
                    <p class="buttons dis-flex">
                    <input name="reset" type="reset" id="reset" tabindex="5" value="Очистить" class="button yellow-border" />  
                    <input name="submit" type="submit" id="submit" tabindex="6" value="Отправить" class="button yellow" />  
                    <input type="hidden" name="comment_post_ID" value="<?php echo $id; ?>" /></p>
                    <?php do_action('comment_form', $post->ID); ?>  
                </form>  
            <?php endif; ?>  
        <?php else : ?>  
            <p>The comments are closed.</p>  
        <?php endif; ?>
        <?php if($comments) : ?>  
            <ul class="post-comments">  
            <?php foreach($comments as $comment) : ?>  
                <li id="comment-<?php comment_ID(); ?>" class="comments_item comment">  
                    <?php if ($comment->comment_approved == '0') : ?>  
                        <p>Your comment is awaiting approval</p>  
                    <?php endif; ?>  

                    <div class="comment_author">
                        <div class="comment_avatar">
                            <?php echo get_avatar(get_comment_author_email(), 48, $default_avatar); ?>
                        </div>
                        <div class="dis-flex flex-direction-col justify-content-between">
                            <div class="comment_name"><?php comment_author_link(); ?></div>
                            <div class="comment_date"><?php comment_date(); ?></div>
                        </div>
                    </div>
                    <div class="comment_text">
                        <?php comment_text(); ?>  
                    </div>
                    <?php comment_reply_link(array('reply_text' => 'Ответ'), get_comment_ID(), get_the_ID()); ?>
                </li>  
            <?php endforeach; ?>  
            </ul> 
        <?php endif; ?> 

    </div>
</section>

