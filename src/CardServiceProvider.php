<?php

namespace mmerlijn\NovaShowAgendaCard;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class CardServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(): void
    {
        $this->app->booted(function () {
            $this->routes();
        });

        Nova::serving(function (ServingNova $event) {
            Nova::script('nova-show-agenda-card', __DIR__.'/../dist/js/card.js');
            Nova::style('nova-show-agenda-card', __DIR__.'/../dist/css/card.css');
        });
    }

    /**
     * Register the card's routes.
     *
     * @return void
     */
    protected function routes():void
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Route::middleware(['nova'])
                ->prefix('nova-vendor/nova-show-agenda-card')
                ->group(__DIR__.'/../routes/api.php');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register():void
    {
        //
    }
}
